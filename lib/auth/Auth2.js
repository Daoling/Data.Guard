var request=require('request');


Auth2 = function(config){
    console.log('Auth2 Complete!');
    
};

var Auth2Factory = function(){
    Auth2Factory.prototype.Auth2 = Auth2 ;
	Auth2Factory.prototype.createAuth = function(){
		return new this.Auth2();
	}
}

var auth2Factory = new Auth2Factory();
exports.main = auth2Factory;