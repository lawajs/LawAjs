
'use strict';
module.exports = function() {
    let count = 1;
    this.Before("@searchWords",function(scenario,callback) {
        console.log('>>>>> Before Hook for Search Words Scenarios (tag: @searchWords)>>>>>');
        console.log('\t#SCENARIO:.'+count+'>>> '+scenario.getName().blue);
        count++;
        callback();
    });
};


