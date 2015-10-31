/**
 * Created by Daoling on 8/11/2015.
 */

var cli = function(){

    this.run = function(argv){
        //TODO: please complete


        //
        switch (1){
            case 'test':

                break;
            case 'help':
            default:
                this.help();
        }
    }

    this.help = function(){
        console.log('This tool will help you auto test WS, the data can come from data file.');
    }

    return this;
}

module.exports = cli();