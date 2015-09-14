var request=require('request');


Request = function(config){
    console.log('Request Complete!');
    return 1;
};

var RequestFactory = function(){
    RequestFactory.prototype.Request = Request ;
    RequestFactory.prototype.createRequest = function(){
        return new this.Request();
    }
}

var requestFactory = new RequestFactory();
exports.main = requestFactory;