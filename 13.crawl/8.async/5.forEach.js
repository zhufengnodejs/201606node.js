var async = require('async');
var items = [{id:1,name:'zfpx1'},{id:2,name:'zfpx2'}];
console.time('cost');
forEach(items,function(item,callback){
    console.log(item);
   setTimeout(callback,2000);
},function(err,result){
    console.log(err);
    console.log(result);
    console.timeEnd('cost');
})

function forEach(){

}