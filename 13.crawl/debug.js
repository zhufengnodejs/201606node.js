module.exports = function(name){
    return function(msg){
        //  logger:A  logger:*
        var debug = process.env.DEBUG;//logger:*
        debug = debug.replace('*','.*');
        var reg = new RegExp(debug);
        if(reg.test(name))
           console.log(name,msg);
    }
}