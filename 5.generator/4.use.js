var fs = require('fs');
/**
 * 优点:同步线性读取文件非常容易阅读
 * 缺点:但是效率低，是阻塞IO，但阻塞主线程的运行，带来性能的损失
 */
/*var first = fs.readFileSync('./1.txt','utf8');//2.txt
 console.log(first);
 var second = fs.readFileSync(first,'utf8');//3.txt
 console.log(second);
 var third = fs.readFileSync(second,'utf8');//3
 console.log(third);*/
/**
 * 优点:性能比较好，效率比较高，不阻塞主线程
 * 缺点: 可读性非常差
 */
/*fs.readFile('./1.txt','utf8',function(err,first){
 fs.readFile(first,'utf8',function(err,second){
 fs.readFile(second,'utf8',function(err,third){
 console.log(third);
 })
 })
 })*/

/**
 * 容易阅读 又要高性能
 */
/**
 * @param filename文件名
 * @returns {Function}
 */
function readFile(filename) {
    return function (callback) {
        //异步读取文件，当读取成功之后调用callback
        fs.readFile(filename,'utf8',callback)
    }
}
function* generator(){//声明一个生成器
    var first = yield readFile('1.txt');//2.txt
    var second = yield readFile(first);//3.txt
    var third = yield readFile(second);//3
    console.log(third);
}
/**
 *  co函数负责把当生成器执行完毕，并自动给yield前面的变量赋值
 * @param gene
 */
function co(gene){
   var it = gene();//执行生成器，得到迭代器
    callback();
   function callback(err,data){
       var result = it.next(data);
       if(!result.done){
           result.value(callback);
       }
   }
}
co(generator);


