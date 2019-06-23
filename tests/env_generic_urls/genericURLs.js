const environment_base_url = require('./testEnvironments').environment_base_url;
module.exports = {

    getURL: function () {
        return {
            home_page: environment_base_url,
        }

    },

};

