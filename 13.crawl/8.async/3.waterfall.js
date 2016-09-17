var async = require('async');
waterfall([
    function(callback){
        callback(null,'水');
    },
    function(data,callback){
        callback(null,data+'+咖啡');
    }
    ,
    function(data,callback){
        callback(null,data+'+牛奶');
    }
],function(err,result){
    console.log(err);
    console.log(result);
})

function waterfall(tasks,callback){
    let index = 0;
    var result = [];//存放所有的结果
    function next(err,data){
        if(index>0) //从第二次next开始才接收data
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