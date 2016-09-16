/**
 *  客户端通过iframe src 指向一个后端接口
 *  后端接口返回一段javascript脚本
 *  客户端拿到后会立刻执行
 *  执行的时候会改变div里时间
 */
var express = require('express');
var app = express();
app.get('/',function(req,res){
  res.sendFile('./3.iframe.html',{root:__dirname});
});
app.get('/time',function(req,res){
  setInterval(function(){
      //不能用end send 结束响应
      res.write(new Date().toLocaleString());
  },1000)
});
app.listen(9090);
