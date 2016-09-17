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
    let index = 0;
    var result = [];
    function next(err,data){
        if(index>0)
            result.push(data);
        if(err)
            return callback(err,result);
        if(index==tasks.length)//如果迭代完毕了，则执行最终的回调
            return callback(err,result);
        var task = tasks[index++];
        task(next);
    }
    next();
}