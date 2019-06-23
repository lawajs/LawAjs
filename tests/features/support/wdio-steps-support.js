'use strict';
const world = require('./world.js').World;
this.World = world;

module.exports = {
    navigateToPage: function (base_url) {
        return browser.pause(500).url(base_url)
            .setViewportSize({width:1280,height:800})
            .pause(500)
            .then(function () {
                console.log('Base URL >>>' + base_url)
            })
            .pause(8000);
    },
    getPageTitle: function () {
        return browser
            .getTitle().then(function(title) {
            console.log(title);
        });
    },
    clickButton: function (selector) {
        return browser
            .pause(2000)
            .waitForVisible(selector, this.TIMEOUT_CONST)
            .scroll(selector)
            .click(selector)
            .pause(1000)
    },
    enterInputValue: function (selector, expectedValue) {
        return browser
            .scroll(selector)
            .pause(2000)
            .setValue(selector, expectedValue)
            .pause(500)
    },
    verifyTextPresent: function (selector, expectedValue, expect) {
        console.log('Expected Text >>' + expectedValue);
        return browser
            .pause(5000)
            .waitForVisible(selector, this.TIMEOUT_CONST)
            .scroll(selector)
            .getText(selector)
            .then(function (readValue) {
                console.log('Actual Text >>' + readValue);
                expect(readValue).to.contains(expectedValue)
            }.bind(this));
    },
    acceptCookiesPopup: function () {
        const pop_frame = $('iframe[id*="pop-frame"]');
        const selector = browser.elements("//a[@class=\"call\"]");
        return browser
            .pause(1000)
            .then(function(){
                browser.frame(pop_frame)
                    .pause(5000)
                    .click(selector);
                console.log('value of frame is >>>>>>>>>>>>>>>>>>', pop_frame);
                console.log('value of cookies button is >>>>>>>>>>>>>>>>>>', selector);
            });
    },

};