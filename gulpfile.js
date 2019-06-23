const gulp = require('gulp');
const plugins = {
    gulpWebDriver: require('gulp-webdriver'),
    path: require('path'),
    glob: require('glob'),
    fs: require('fs'),
    exec: require('child_process').exec,
    //wdio: require('core-cucumber-bdd')
    //webdriver: require('wdio-cucumber-framework'),
};

gulp.task('wdio-search-key-word', function () {
    const isWin = /^win/.test(process.platform);
    const cmd = isWin ? 'gulpWebDriver.cmd' : 'gulpWebDriver';
    return gulp.src('tests/conf/tech-test.cuke.conf.js')
        .pipe(plugins.gulpWebDriver({
            wdioBin: plugins.path.join(__dirname, 'node_modules', '.bin', cmd)
        }));
});

let seleniumServer;

gulp.task('selenium', function() {
    const isWin = /^win/.test(process.platform);
    const Chromeexecutable = isWin
        ? 'node_modules/chromedriver/lib/chromedriver/chromedriver.exe'
        : 'node_modules/chromedriver/bin/chromedriver';
    const IEexecutable = isWin
        ? 'BDD/tests/acceptance/wdio/tools/iedriver/lib/iedriver/IEDriverServer.exe'
        : 'node_modules/iedriver/bin/iedriver';
    const command = isWin
        ? 'java -jar node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.53.1.jar -log ../seleniumLog.txt -Dwebdriver.ie.driver=' +
    plugins.path.resolve(__dirname, IEexecutable) +
    ' -Dwebdriver.chrome.driver=' +
    plugins.path.resolve(__dirname, Chromeexecutable)
        : 'java -jar node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.53.1.jar -log ../seleniumLog.txt -Dwebdriver.chrome.driver=' +
    plugins.path.resolve(__dirname, Chromeexecutable);
    seleniumServer = plugins.exec(command, function() {
        seleniumServer = null;
    });
 });

gulp.task('search-keyword', ['selenium', 'wdio-search-key-word'], function (cb) {
    if (seleniumServer) {
        process.kill(seleniumServer.pid, 'SIGINT');
    }
    cb();
    process.exit(0);
});

const yaml = require('js-yaml');
const fs = require("fs");
const mergedArray = [];

gulp.task('findDuplicates', function (cb) {

    //Load all the Yaml files available inside the locators folder
    return plugins.glob("tests/locators/*.yml", function (er, files) {
        let isUnique = true;
        files.forEach(function (filePath) {
           try {

                const objYaml = yaml.load(fs.readFileSync(filePath));

                //console.log(objYaml);
                for (let p in objYaml) {

                    if (mergedArray.indexOf(p) > -1) {
                        isUnique = false;
                        console.log('<<<<<< ' + p + ' is a DUPLICATE ENTRY >>>>>>');
                        isUnique = false;
                    }
                    else {
                        mergedArray.push(p);
                    }
                }
            }
            catch (err) {
                console.log('<<<<<<' + err + '>>>>>>');
            }
            //}
        });

        if (isUnique) {
            console.log('<<<<<<< I am Unique :) >>>>>>>');
        }
        else {
            console.log('<<<<<<< I am NOT Unique :( >>>>>>>');
        }
        cb();
    })

});


