var request=require('request');
var config=require('../config.json');

Connect = function(){
    var options = {
    headers: {"Connection": "close"},
    url: config.url,
    method: config.method,
    json:true
    };

    function callback(error, response, data) {
    	console.log('RESPONSE.STATUSCODE:' + response.statusCode);
	}
    request(options, callback);  
};

exports.Connect = Connect;