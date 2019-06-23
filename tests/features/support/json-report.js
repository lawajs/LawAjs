'use strict';
const world = require('./world.js').World;
const Cucumber = require('wdio-cucumber-framework/node_modules/cucumber');
const reporter = require('cucumber-html-reporter');
const fs = require('fs-extra');
const path = require('path');

const JsonFormatter = Cucumber.Listener.JsonFormatter();
const currentTime = new Date().toJSON().replace(/:/g, "-");
console.log("Time = " + currentTime);
module.exports = function JsonOutputHook() {

    try {

        this.World = world;

        let deviceName = global.browser.desiredCapabilities.deviceName;
        console.log("Running Tests for Device = " + deviceName);

        let browserName = global.browser.desiredCapabilities.browserName;
        console.log("Running Tests for = " + browserName + "browser");

        let platformName = global.browser.desiredCapabilities.platform;
        console.log("Platform = " + platformName);

        let platformVersion = global.browser.desiredCapabilities.version;
        console.log("Platform Version = " + platformVersion);

        JsonFormatter.log = function (json) {
            let reportPath = 'tests/reports/output';
            let reportPathHTML = 'tests/reports/output-html';
            let jsonReport = JSON.parse(json);
            let featureName = null;
            let reportFile = null;
            let platform_name = null;

            if (jsonReport.length > 0) {
                featureName = jsonReport[0].name.replace(/\s+/g, '_').replace(/\W/g, '').toLowerCase() || 'noName';
            }
            if (typeof deviceName === 'undefined') {
                reportFile = featureName + '.json';
            }
            else {
                console.log("In Device Flow");
                if (browserName === "iphone") {
                    platform_name = 'iOS';
                }
                else if (browserName === "android") {
                    platform_name = 'Android';
                }
                console.log("platform_name = " + platform_name + "\n")
                reportFile = featureName + '.json';
            }

            let AbsreportPath = reportPath + "/" + reportFile;

            let destination = path.join(__dirname, reportPath);

            fs.open(AbsreportPath, 'w+', function (err, fd) {
                if (err) {
                    console.log('There is an error opening or writing to the file: ' + err + AbsreportPath);
                    fs.mkdirsSync(destination);
                    fd = fs.openSync(AbsreportPath, 'w+');
                }
                fs.writeSync(fd, json);
                console.log('Run Complete: json reports file location: ' + AbsreportPath);
                let options = {
                    theme: 'bootstrap',
                    jsonFile: AbsreportPath,
                    output: reportPathHTML + "/" + featureName + '.html',
                    reportSuiteAsScenarios: true,
                    launchReport: false,
                    metadata: {
                        "Test Environment": "XBS",
                        "Browser": "Chrome",
                        "Platform": "Windows OS",
                        "Parallel": "Scenarios", "Executed": "Remote",
                        "Author": "Lawrence Ajayi"
                    }
                };
                reporter.generate(options);
            });
        };
        this.registerListener(JsonFormatter);

    } catch (err) {
        console.log(err);
    }

};



