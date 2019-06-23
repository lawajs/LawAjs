/*
'use strict'
const report = require('multiple-cucumber-html-reporter');
const current_time = new Date().toJSON().replace(/:/g, "-");

        report.generate({
            jsonDir: 'tests/reports/output/',
            reportPath: 'tests/reports/reports-dashboard/',
            openReportInBrowser: false,

            metadata: {
                device: 'MacBook Pro',
                browser: {
                    name: 'chrome',
                    version: '66',
                },
                platform: {
                    name: 'Mac OS High Sierra',
                    version: '10.13'
                },
            },
            customData: {
                title: 'Test Run information',
                data: [
                    {label: 'Project', value: 'CM&P'},
                    {label: 'Release', value: '1.0'},
                    {label: 'Cycle', value: 'Test Cycle 3'},
                    {label: 'Execution Date & Time', value: current_time},
                    {label: 'Author', value: 'QE Test Team'}
                ]
            },

        });

*/

const report = require('multiple-cucumber-html-reporter');
const current_time = new Date().toJSON().replace(/:/g, "-");

report.generate({
    jsonDir: 'tests/reports/output/',
    reportPath: 'tests/reports/reports-dashboard/',
    openReportInBrowser: false,
    metadata: {
        device: 'Windows OS',
        browser: {
            name: 'chrome',
            version: '66',
        },
        platform: {
            name: '',
            version: ''
        },
        customData: {
            title: 'Testing Summary Report',
            data:[
                {label: 'WTW Project', value: 'Technical Test'},
                {label: 'Execution Date & Time', value: 'current_time'},
                {label: 'Author', value: 'Lawrence Ajayi'}
            ]
        },
    }
});
