var fs = require('fs');
var child_process = require('child_process');
function download(url){
  //先得到文件名
  var filename = url.split('/').pop();
  //创建一个可写流
  var ws = fs.createWriteStream('./'+filename);
  //运行子进程 得到子进程 的实例
  var child = child_process.spawn('curl',[url]);
  //在主进程中监听子进程的data事件
    // stdout 标准输出 就是输出到控制台的东西 console.log();
  child.stdout.on('data',function(data){
      ws.write(data);
  });
    //在主进程中监听子进程的end事件，关闭可写流
  child.stdout.on('end',function(){
      ws.end();
  });
}

download('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png');