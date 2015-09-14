var args = process.argv.splice(2);
var config = require(args[0]);
var run = require('./lib/run.js');

run.main(config);

