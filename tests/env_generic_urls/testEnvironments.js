const test_environment = 'sbx';
console.log('Test Environment: ' + test_environment);

//Environment Base Url for different environment
const SBX_URL = 'https://willistowerswatson.com'; //This is assuming that the test is conducted in sandbox environment
//const ST_URL = 'https://willistowerswatson.com'; //This can be used for ST environment by changing the url to point to the correct env.

let environment_base_url = null;
switch (test_environment.toLowerCase()) {
    case "sbx": {
        environment_base_url = SBX_URL;
    }
        break;
   /* case "st": {
        environment_base_url = ST_URL;
    }
        break;*/
}
module.exports.environment_base_url=environment_base_url;
module.exports.test_environment=test_environment;


