var express = require('express');
var path = require('path');
var app = express();
app.get('/',function(req,res){
  res.sendFile(path.resolve('chat.html'));
});

var server = require('http').createServer(app);

var io = require('socket.io')(server);

io.on('connection',function(socket){
    var username;
    //向刚连接上的客户端发送消息
    socket.send({username:'系统',msg:'欢迎来到珠峰聊天室,请给自己起个呢称吧!'});
    socket.on('message',function(msg){
        if(username){
            //把此消息广播给所有的人
            io.emit('message',{username,msg});
        }else{//此用户的第一次发言会作为此用户的用户名
            username = msg;
            socket.send({username:'系统',msg:`欢迎${username}来到聊天室`});
        }
    });
});

server.listen(9090);
