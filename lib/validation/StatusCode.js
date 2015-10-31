var request=require('request');
var StatusCode = function(config){
	request(config.url, function (error, response, body) {
	    console.log('statusCode:' + response.statusCode) 
	})
}

var StatusCodeFactory = function(){
    StatusCodeFactory.prototype.StatusCode = StatusCode ;
	StatusCodeFactory.prototype.createValidation = function(config){
		return new this.StatusCode(config);
	}
}

var statuscodeFactory = new StatusCodeFactory();
exports.main = statuscodeFactory;