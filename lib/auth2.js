var request=require('request');
var config=require('../config.json');

validate = function(){
    this.output = config.url;
    console.log(config.data);
};

exports.validate = validate;