var request=require('request');
var config=require('../config.json');

Auth2 = function(){
    if( config.username != "" && config.password != ""){
    	console.log('AUTH2: Yes');
    }
    else{
    	console.log('AUTH2: No');
    }
};

exports.Auth2 = Auth2;