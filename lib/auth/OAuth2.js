var request=require('request');

var body = '';
var OAuth2 = function(config, a){
	 var i = a ; 

	 var options = {
	 url: config[i].auth.url,
	 headers: {
	          name: 'content-type',
	          value: 'application/json; charset=utf-8'
	 },
	 method: "POST",
	 form:{
	 	grant_type: 'password',
	 	username: config[i].auth.username,
	 	password: config[i].auth.password,
	 	scope: config[i].auth.scope
	 }  
	}

	function callback(error, response, body) {	
			console.log('OAuth2.0 statusCode: ' + response.statusCode);
		
	}

	request(options, callback).on('data', function(d) {
   	    body += d;
	})
    .on('end', function() {
	    var parsed = JSON.parse(body);
	    
		console.log('OAuth2.0 token: ' + parsed.access_token);
		
		for(var j = 0; j < config[i].data.length; j++){
            // <summary>
            //  Request data from server
            // </summary>
            var request = require('./RequestData.js');
            var request_log = request.main.createRequest(config, parsed.access_token, i, j); 
        }   
	})
};

var OAuth2Factory = function(){
    OAuth2Factory.prototype.OAuth2 = OAuth2 ;
	OAuth2Factory.prototype.createAuth = function(config, a){
		return new this.OAuth2(config, a);
	}
}

var oauth2Factory = new OAuth2Factory();
exports.main = oauth2Factory;