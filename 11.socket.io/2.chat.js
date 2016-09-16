var express = require('express');
var path = require('path');
var app = express();

app.get('/',function(req,res){
  res.sendFile(path.resolve('chat.html'));
});
app.use(express.static(__dirname));
var server = require('http').createServer(app);

var io = require('socket.io')(server);

io.on('connection',function(socket){
    var username;
    var currentRoom;
    //向刚连接上的客户端发送消息
    socket.send({username:'系统',msg:'欢迎来到珠峰聊天室,请给自己起个呢称吧!'});
    socket.on('message',function(msg){
        if(username){
            //把此消息广播给所有的人
            if(currentRoom){//如果此socket在某个房间内，则只向房间内的人广播
                console.log(currentRoom);
                io.in(currentRoom).emit('message',{username,msg});
            }else{//如果此socket不同任何房间内，则向所有人广播
                io.emit('message',{username,msg});
            }
        }else{//此用户的第一次发言会作为此用户的用户名
            username = msg;
            socket.send({username:'系统',msg:`欢迎${username}来到聊天室`});
        }
    });
    //在服务器端进入不同的房间
    socket.on('join',function(roomName){
        //当加入新房间的时候如果当前房间有值，则意味着已经在某个房间内了
        if(currentRoom){
            //离开某个房间
            socket.leave(currentRoom);
        }
        currentRoom = roomName;
        //加入某个房间内
        socket.join(roomName);
    })
});

server.listen(9090);
