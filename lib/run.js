
var main = function(config){
    for(var i = 0; i < config.length; i++){
        // <summary>
        //  Choose the type of auth mode
        // </summary>
        var auth = require('./auth/' + config[i].auth.mode);
        var auth_log = auth.main.createAuth(config, i);     
    }
};



exports.main = main;
