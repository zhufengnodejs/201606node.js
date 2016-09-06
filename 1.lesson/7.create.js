var path = require('path');
var fs = require('fs');
//同步创建 非常容易阅读 但是效率较低，而且会阻塞主线程
function mkdir1(p){
    //先对路径分隔符进行转换 /\都转成当前操作系统下面的路径分隔符
    var p= p.replace(/[\/]/g,path.sep);
    //按路径分隔符进行分隔
    var pathname= p.split(path.sep);
    // a/b/c
    for(var i=0;i< pathname.length;i++){
        //截取每个子路径
        var cpath=pathname.slice(0,i+1).join(path.sep);
        //如果存在此路径，则返回，如果不存在，则创建
        fs.existsSync(cpath)||fs.mkdirSync(cpath)
    }
}

//异步正向
function makep(dir){
    //先对路径分隔符进行转换 /\都转成当前操作系统下面的路径分隔符
    var dir= dir.replace(/[\/]/g,path.sep);
    //按路径分隔符进行分隔 ['a','b','c']
    var pathname= dir.split(path.sep);
    var index = 1;
    make();
    function make(){
        if(index>pathname.length)//如果index 大于数组长请表示创建完成
            return;
        //依次获取至上而下的子目录
       var subDir = pathname.slice(0,index++).join(path.sep);
        //判断此子目录是否存在
       fs.exists(subDir,function(exists){
            if(exists){//如果此目录存在，则直接执行下一次
                make();
            }else{//如果此目录不存在则创建此子目录，并在创建成功后调用make
                fs.mkdir(subDir,make);
            }
       })
    }
}
//异步逆向

makep(path.join('a','b','c','d','e','f','g'));