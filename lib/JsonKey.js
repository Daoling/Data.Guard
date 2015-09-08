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
	        } 
	        else{
	            console.log('JSON KEY VERIFICATION: NO!');
	        }
	    }
	}

    request(options, callback);  
};

exports.JsonKey = JsonKey;