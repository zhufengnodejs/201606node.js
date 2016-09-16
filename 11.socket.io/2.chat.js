var express = require('express');
var path = require('path');
var app = express();
app.get('/',function(req,res){
  res.sendFile(path.resolve('chat.html'));
});

var server = require('http').createServer(app);

var io = require('socket.io')(server);
io.on('connection',function(socket){
    socket.on('message',function(msg){

    });
});

server.listen(9090);
