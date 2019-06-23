'use strict';
const world = require('../support/world.js').World;
const wdio = require('../support/wdio-steps-support.js');
this.World = world;

const myStepDefinitionsWrapper = function () {

    this.When(/^I am on the Global English site$/, function () {
        let expectedValue = "Willis.Towers Watson|Risk, Booking, HR, Benefits - Willis Towers Watson";
        return wdio.getPageTitle(title, expectedValue)
    });
    this.Given(/^I could see "([^"]*)" as "([^"]*)"$/, function (selector, expectedValue) {
        wdio.verifyTextPresent(this.getSelector(selector), expectedValue, this.expect);
    });
    this.Then(/^I should see the "([^"]*)" as "([^"]*)"$/, function (selector, expectedValue) {
        wdio.verifyTextPresent(this.getSelector(selector), expectedValue, this.expect);
    });
};
module.exports = myStepDefinitionsWrapper;

