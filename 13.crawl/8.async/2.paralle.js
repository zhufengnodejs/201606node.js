var async = require('async');
console.time('cost');
//并行指的是并发执行，一起开始
parallel([function (next) {
    setTimeout(function(){
        next(null, '电视');
    },3000);
}, function (next) {
    setTimeout(function(){
        next(null, '作业');
    },1000);
}], function (err, result) {
    console.error(err);
    console.log(result);
    console.timeEnd('cost');
})

function parallel(){

}