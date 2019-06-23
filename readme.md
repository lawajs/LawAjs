#### Created By: Lawrence Ajayi

################################ Introduction ############################################################################

This Documents walks you through the prerequisite and how to execute the test in this framework on different platforms.

This framework has been written to enable the Automation of UI through Selenium Standalone Server, WebdriverIO and Cucumber.js.


Requirements

On Windows OS:
############################################

1) Install Node 8.xx upward
2) Install Java 8.xx upward
3) Install the build tools - Visual studio build tools 2017 (vs_buildTools)
4) Install Python 2.7 ensure to select the "install to local path" during installation
5) Launch cmd, run npm config set msvs_version 2017

To execute the test on Windows:
--------------------------------------
After cloning the repo; install all the dependencies; at the root of the project folder, type; npm install
(This will install all the necessary modules required to run the automation test)
After the installation of all the dependencies as contained in the package json file,
at the root of the project folder within your IDE (Ideally Webstorm) type: runtest (Please note; this is runtest.bat file).

On Mac OS:
################################

1) Install Node 8.xx upward
2) Install yarn using the following; brew install yarn
3) Install Java 8.xx upward


To execute the test on Mac OS:
--------------------------------------------
After cloning the repo; install all the dependencies; at the root of the project folder, type; yarn install
(This will install all the necessary modules required to run the automation test)
After the installation of all the dependencies as contained in the package json file,
at the root of the project folder within your IDE (Ideally Webstorm) type: ./runtest-linux.sh

Additional Support:
################################################
**In case any errors come up and the webdriverio module doesn't get installed, install the same through the command:

	yarn add <modulename> (for Mac)
	
	or
	
	npm install <modulename> (for Windows)

For Example; if running cucumber task shows following type of errors

This error means that a required npm module is missing & should be installed manually now (or add in package.json & rerun npm install)

		C:\GIT\central_core\core-webdriverio-framework>gulp cucumber
		module.js:339
			throw err;
			^

		Error: Cannot find module 'gulp-autoprefixer'
			at Function.Module._resolveFilename (module.js:337:15)
			at Function.Module._load (module.js:287:25)
			at Module.require (module.js:366:17)
			at require (module.js:385:17)
			at Object.<anonymous> (C:\GIT\central_core\core-webdriverio-framework\gulp-tasks\sass.js:2:14)
			at Module._compile (module.js:435:26)
			at Object.Module._extensions..js (module.js:442:10)
			at Module.load (module.js:356:32)
			at Function.Module._load (module.js:311:12)
			at Module.require (module.js:366:17)
			at require (module.js:385:17)
	

Then run following command

	yarn install gulp-autoprefixer --save-dev
	
	or
	
	npm install gulp-autoprefixer
    

################################### Configuration ###########################################################

 - Gulp is used for creating and triggering tasks
 - The Cucumber configurations are defined in the configuration file in the conf folder and includes; tech-test.cuke.conf.js file

######## Framework/Tools used consist of the following: ###############

- Gulp 
- WebdriverIO
- Cucumber.js
- Selenium Standalone Server
- Chrome/IE drivers
- JS-Yaml


