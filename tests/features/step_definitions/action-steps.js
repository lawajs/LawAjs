'use strict';
const world = require('../support/world.js').World;
const wdio = require('../support/wdio-steps-support.js');
this.World = world;

const myStepDefinitionsWrapper = function () {
    this.Given(/^I click on "([^"]*)"$/, function (selector) {
        return wdio.clickButton(this.getSelector(selector));
    });
    this.Given(/^I click on the cookies Acceptance Popup$/, function () {
       return wdio.acceptCookiesPopup();
    });
    this.When(/^I entered "([^"]*)" in "([^"]*)"$/, function (expectedValue, selector) {
        return wdio.enterInputValue(this.getSelector(selector), expectedValue);
    });
};
module.exports = myStepDefinitionsWrapper;