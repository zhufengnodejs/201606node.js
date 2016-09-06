/**
 * 模块的分类
 * 内置模块 require('fs url http path util');
 *    速度最快，内置于node中
 * 文件模块 自己写的模块
 *    通过路径来加载的 ./
 * 第三方模块 别人写的模块 require('mime');
 */
require('./6.fs.js');
var mime = require('mime.js');
/**
 * 1. 看当前目录下面有没有node_modules，如果有在里面找，
 * 如果没有找父级
 * 2. 找一个名字叫 mime的文件夹
 * 3. 先找package.json里面的main配置项
 * 4. 如果没有main配置项会找index.js的文件
 */


