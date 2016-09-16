var Server = require('ws').Server;
var server = new Server({port:8080});
//服务器开始在8080端口上监听客户端的请求
//socket代表与客户端通信的通道
var sockets = [];
server.on('connection',function(socket){
    socket.name=Date.now();
    sockets.push(socket);
    console.log('现在有'+sockets.length+'个客户端已经连接');
    socket.send('欢迎光临');
    //监听对方发过来的消息
   socket.on('message',function(msg){
        console.log(msg);
       //向对方客户端发消息
        socket.send('服务器:'+msg);
   });
});