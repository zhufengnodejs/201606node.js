module.exports = function(name){
    return function(msg){
        //  logger:A  logger:*
        var debug = process.env.DEBUG;//logger:*
        debug = debug.replace('*','.*');// logger:.*
        var reg = new RegExp(debug);/logger:.*/
        if(reg.test(name))
           console.log(name,msg);
    }
}