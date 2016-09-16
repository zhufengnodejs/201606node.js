var express = require('express');
var app = express();
/**
 * preflight 预检查就是在真正发起请求的之前发出的检查请求
 * 请求的方法为options 需要返回响应头
 * Access-Control-Allow-Origin 是否允许跨域访问
 *
 */
app.options('/time',function(req,res){
    //允许 哪个来源
    res.setHeader('Access-Control-Allow-Origin','*');
    //允许发送的请求头
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    res.setHeader('Access-Control-Allow-Methods','GET');
    res.send();
});
app.post('/time',function(req,res){
  res.setHeader('Access-Control-Allow-Origin','*');

  //res.setHeader('Access-Control-Allow-Headers','*');
  res.send(new Date().toLocaleString());
});
app.listen(9090);