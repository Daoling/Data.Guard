var main = function(config){
   
   
   for(var i = 0; i < config.length; i++){
        // <summary>
        //  Choose the type of auth mode
        // </summary>
        var auth = require('./auth/' + config[0].auth.mode);
  		var auth_log = auth.main.createAuth(config);
       
        // console.log(auth_log);

        // <summary>
        //  Request data from server
        // </summary>
        var request = require('./request.js');
        var request_log = request.main.createRequest(config);
        
        // <summary>
        //  Validate request data with standard data
        // </summary>
        for(var j = 0; j < config[i].validation.length; j++){
            var validation = require('./validation/' + config[i].validation[j].mode);
            var validation_log = validation.main.createValidation(config[i].validation[j].standard_data, request_log);
  
        }
    }

   

   
};



exports.main = main;
