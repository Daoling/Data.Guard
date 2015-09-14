JsonKey = function(standard, request){
	if(standard == request){
		console.log('Jsonkey validation pass!');
	}
};

var JsonKeyFactory = function(){
    JsonKeyFactory.prototype.JsonKey = JsonKey ;
	JsonKeyFactory.prototype.createValidation = function(){
		return new this.JsonKey();
	}
}

var jsonkeyFactory = new JsonKeyFactory();
exports.main = jsonkeyFactory;