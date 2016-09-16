var express = require('express');
var path = require('path');
var app = express();
app.get('/',function(req,res){
    res.sendFile(path.resolve('index.html'));
});
//app.listen();
//app其实是一个请求监听函数
var server = require('http').createServer(app);
//socket.io是依赖http服务器 握手动作是依赖http协议
// io就是类似于websocket服务
var io = require('socket.io')(server);
//监听客户端的webscoket请求
io.on('connection',function(socket){
    //向客户端发出消息
    socket.send('欢迎你呀客户端!');
    socket.emit('message','欢迎你呀客户端!');
    //监听客户端的消息，
    socket.on('message',function(msg){
        console.log(msg);
        socket.send('服务器说:'+msg);
    });
});

server.listen(9090);


