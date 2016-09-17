var async = require('async');
var items = [{id:1,name:'zfpx1'},{id:2,name:'zfpx2'}];
console.time('cost');
async.forEach(items,function(item,xx){
    console.log(item);
   setTimeout(xx,2000);
},function(err,result){
    console.log(err);
    console.log(result);
    console.timeEnd('cost');
})
function forEach(){}