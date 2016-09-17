var async = require('async');
console.time('cost');
async.auto({
    getWater:function(callback){
        setTimeout(callback,1000,null,'水');
    },
    getFlour:function(callback){
        setTimeout(callback,2000,null,'面粉');
    },
    mix:['getWater','getFlour',function(result,callback){
        setTimeout(callback,2000,null,result.getWater+'+'+result.getFlour+'+和面');
    }]
},function(err,result){
    console.log(err);
    console.log(result);
    console.timeEnd('cost');
})