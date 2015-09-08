var request=require('request');
var config=require('../config.json');


JsonKey = function(){

	var options = {
    headers: {"Connection": "close"},
    url: config.url,
    method: config.method,
    json:true
    };

    function callback(error, response, data) {
	    if (response.statusCode == 200) {
	        if(data == config.data){
	            console.log('JSON KEY VERIFICATION: Pass!');
	            console.log('RESPONSE DATA:' + data);
	        } 
	        else{
	            console.log('JSON KEY VERIFICATION: NO!');
	            console.log('RESPONSE DATA:' + data);
	        }
	    }
	}

    request(options, callback);  
};

exports.JsonKey = JsonKey;