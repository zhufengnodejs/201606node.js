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
//在子框架中通过parent可以引用父框架
// 父框架 show    子框架的脚本里parent.show来引用父框架里的函数
app.get('/time',function(req,res){
  setInterval(function(){
      //不能用end send 结束响应
      //res.write(new Date().toLocaleString());
      res.write(`
      <script>
         console.log('xxx');
      </script>
      `);
  },1000)
});
app.listen(9090);
