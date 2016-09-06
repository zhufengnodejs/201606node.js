var fs =require('fs');
/**
 * 流是一种数据传输手段
 * 有起点和终点
 * 流是EventEmitter的子类,可以发射和接收事件
 **/
/*
var rs = fs.createReadStream('./1.txt');
rs.on('data',function(data){
    console.log('data:',data.toString());
})
rs.on('end',function(){
    console.log('end');
})*/


/*
var ws = fs.createWriteStream('./write.txt');
ws.write('a');//结束前可以多次写入
ws.write('b');
ws.end();*/
//先创建可读流
var rs = fs.createReadStream('./1.txt');
//再创建可写流
var out = fs.createWriteStream('./2.txt');
//通过管道的方式让数据从可读流里流到可写流里
rs.pipe(out);