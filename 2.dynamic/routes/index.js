/**
 * 1. server.js 代码做好最精简
 * 2. 对修改关闭，对扩展开放
 * @param app
 */
var fs = require('fs');
module.exports = function(app){
   //因为当前目录是2.dynamic
   var dirs = fs.readdirSync('./routes');
   dirs.forEach(function(dir){
      // 在加载模块的时候，.代表当前此模块所在的目录
      if(dir != 'index.js')
         require('./'+dir)(app);
   });
}