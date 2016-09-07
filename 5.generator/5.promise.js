var co = require('co');
var fs = require('fs');
var Promise = require('./Promise');
/**
 * 在Promise指定函数内，执行异步任务
 * 如果异步任务成功了 调用resolve，会触发成功的回调函数执行
 * 如果异步任务失败了，调用reject,会触发失败的回调函数执行
 * 当new Promise实例的时候会马上执行
 */
var promise  = new Promise(function(resolve,reject){
   fs.readFile('1.txt','utf8',function(err,data){
        if(err){
            reject(err);
        }else{
            resolve(data);
        }
   })
});
// promise有then方法，用来注册成功的回调函数和失败的回调函数
promise.then(function(data){
    console.log(data);
},function(err){
    console.error(err);
});