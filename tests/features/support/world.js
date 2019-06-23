'use strict';
const expect = require('chai').expect;
const assert = require('chai').assert;
const config = require('./config');
//const sinon = require('sinon');
//const nock = require('nock');
const yaml = require('js-yaml');
const fs = require("fs");
const yamlMerge = require('yaml-merge');
const glob = require("glob");
const _ = require('lodash');
let objYaml = null;

function World() {
    this.assert = assert;
    this.expect = expect;
    this.client = browser;

    this.lodash = _;
    this.config = config;
    this.config.soaEndpoints = global.browser.options.soaEndpoints;
    this.config.serverUrls = global.browser.options.serverUrls;
    this.config.brandToTest = global.browser.options.brandToTest;
    this.config.productToTest = global.browser.options.productToTest;
    this.config.capabilities = global.browser.options.capabilities;

    this.TIMEOUT_CONST = 50000;
    this.client = browser;
    this.pause = 7500;

    if (objYaml === null) {

        glob("tests/locators/*.yml", function (er, files) {
            objYaml = yamlMerge.mergeFiles(files);
        });
    }

    function getSelector(field) {
        let dataSelector = (field.indexOf(' ') > -1) ? '[data-selector*="' : '[data-selector="';

        if (config.lookups[field]) {
            dataSelector = config.lookup.s[field];
        }
        else if (objYaml[field]) {
            dataSelector = objYaml[field];
        }
        else {
            dataSelector = field;
        }
        return dataSelector;
    }

    this.getSelector = function (field) {
        return processSelector(field);
    };


   /* this.getTodaysDate = function () {
        let currentDate = new Date();
        return [('0' + (currentDate.getDate())).slice(-2), ('0' + (currentDate.getMonth() + 1)).slice(-2), currentDate.getFullYear()].join('/');
    };


    this.createRandomString = function () {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
            randomString = '',
            rnum;

        for (let i = 0; i < 5; i++) {
            rnum = Math.floor(Math.random() * chars.length);
            randomString += chars.substring(rnum, rnum + 1);
        }
        return randomString;
    };*/

    function processSelector(selector) {
        let combinedSelector = '';
        let subSelectors = selector.split('|');
        for (let i = 0; i < subSelectors.length; i++) {
            let resolvedSelector = getSelector(subSelectors[i]);
            if (resolvedSelector.indexOf('|') > -1) {
                combinedSelector += processSelector(resolvedSelector);
            } else {
                combinedSelector += resolvedSelector + ' ';
            }
        }
        return combinedSelector;
    }

};

module.exports = function () {
    this.World = World;
};