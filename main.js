var config=require('./config.json');
var step1= require('./lib/Connect.js');
var step2= require('./lib/Auth2.js');
var step3= require('./lib/JsonKey.js');


var Connect = new step1.Connect();
var JsonKey = new step3.JsonKey();



