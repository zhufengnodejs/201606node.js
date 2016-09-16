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
/* 1.在父框架中定义一个函数
   2. 在返回的脚本中调用父框架的函数以改变time的div里的内容
 */
app.get('/time',function(req,res){
  //fs.createReadStream().pipe(res);
  setInterval(function(){
      //不能用end send 结束响应
      //res.write(new Date().toLocaleString());
      res.write(`
      <script>
         parent.document.querySelector('#time').innerHTML = '${new Date().toLocaleString()}';
      </script>
      `);
  },1000)
});
app.listen(9090);
