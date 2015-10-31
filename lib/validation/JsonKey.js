JsonKey = function(config, body, a, b ,c){
	var i = a ;
	var j = b ; 
	var k = c ; 
	var stringifyed = JSON.stringify(config[i].data[j].validation[k].standard_data);
	if( body == stringifyed){
		console.log('[[' + k +']] JsonKey Validation Pass!');
	}
	else{
		console.log('[[' + k +']]  JsonKey Validation Failed!');
	}
	
	
};

var JsonKeyFactory = function(){
    JsonKeyFactory.prototype.JsonKey = JsonKey ;
	JsonKeyFactory.prototype.createValidation = function(config, body, a, b ,c){
		return new this.JsonKey(config, body, a, b ,c);
	}
}

var jsonkeyFactory = new JsonKeyFactory();
exports.main = jsonkeyFactory;