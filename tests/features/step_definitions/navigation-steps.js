'use strict';
const world = require('../support/world.js').World;
const wdio = require('../support/wdio-steps-support.js');
this.World = world;

const myStepDefinitionsWrapper = function () {
    this.Given(/^I navigate to the "(.*)" page$/, function (base_url) {
        return wdio.navigateToPage(this.config.serverUrls[base_url])
    });
};
module.exports = myStepDefinitionsWrapper;