var express=require('express');
var app=express();
/**
 * preflight 预检查就是在真正发起请求的之前发出的检查
 * 请求的方法为options 需要返回响应头
 */
/*app.options('/time',function(req,res){
 res.setHeader('Access-Control-Allow-Origin','*');
 res.setHeader('Access-Control-Allow-Origin','Content-Type');
 res.send();
 });*/
/*app.post('time',function(req,res){

 });*/
app.get('/time',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.send(new Date().toLocaleString())
});
app.listen(9090);
