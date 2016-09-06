/**
 * fs 重点方法
 */
var fs= require('fs');
/*fs.readFile(); 读取文件
fs.writeFile(); 写文件
fs.exists(); 判断文件是否存在
fs.mkdir(); 创建文件夹
*/

var path  = require('path');
//把多个路径机械得拼成一个路径
console.log(path.join(__dirname,'a','b'));
//从当前目录出发，拼取下面的a/b
console.log(path.resolve('a','b'));
/*path.join();
path.resolve();
path.sep; window  linux mac 路径分隔符不一样

*/
console.log(path.sep);
/**
 * 级联创建目录
 * 创建子文件夹的要求父文件是存在的
 * 异步创建递归创建文件夹
 */
function mkdirp(dir){
    /*fs.mkdir(dir,function(err){
        console.log(err);
    });*/
}
//console.log(path.join('a','b','c'));
mkdirp(path.join('a','b','c'));
