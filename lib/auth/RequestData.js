var request=require('request');


var Request = function(config, token, a, b){
	
	 var i = a ;
	 var j = b ; 

	 var options = {
	 url:  config[i].data[j].url ,
	 headers: {
	     'Authorization': 'Bearer ' + token
	 },
	 method: 'get'
	}

	function callback(error, response, body) {	
		console.log('[' + j + ']   Response data datail: ' + body);
		 for(var k = 0; k < config[i].data[j].validation.length; k++){
                var validation = require('./../validation/' + config[i].data[j].validation[k].mode);
                var validation_log = validation.main.createValidation(config, body, i, j ,k);
      
         }   
	}

	request(options, callback);
};

var RequestFactory = function(){
    RequestFactory.prototype.Request = Request ;
    RequestFactory.prototype.createRequest = function(config, token, a, b){
        return new this.Request(config, token, a, b);
    }
}

var requestFactory = new RequestFactory();
exports.main = requestFactory;