var async = require('async');
console.time('cost');

series([function (next) {
    setTimeout(function(){
        next(null, '电视');
    },2000);
}, function (next) {
    setTimeout(function(){
        next(null, '作业');
    },3000);
}], function (err, result) {
    console.error(err);
    console.log(result);
    console.timeEnd('cost');
})

function series(tasks,callback){

}