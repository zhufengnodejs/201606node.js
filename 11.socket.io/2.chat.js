var express = require('express');
var path = require('path');
var app = express();
app.get('/',function(req,res){
  res.sendFile(path.resolve('chat.html'));
});

var server = require('http').createServer(app);

var io = require('socket.io')(server);
io.on('connection',function(socket){
    //向刚连接上的客户端发送消息
    socket.send('欢迎来到珠峰聊天室');
    socket.on('message',function(msg){
        io.emit('message',msg);
    });
});

server.listen(9090);
