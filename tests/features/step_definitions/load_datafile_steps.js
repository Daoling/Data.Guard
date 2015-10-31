var loadDatafileSteps = function(){
    this.Given(/^the command as (.*)$/, function (command, callback) {
        // Write code here that turns the phrase above into concrete actions

        callback();
    });

    this.When(/^I add the parameters as (.*)$/, function (parameters, callback) {
        // Write code here that turns the phrase above into concrete actions
        var config = require(parameters);
        var run = require('./../../../lib/run.js');
        run.main(config);
        callback();
    });

    this.Then(/^I got the output as (.*)$/, function (result, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });
}

module.exports = loadDatafileSteps;