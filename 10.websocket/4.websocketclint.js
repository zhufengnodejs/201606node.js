var Socket = require('ws');
var socket = new Socket('ws://localhost:8080');
//当客户端连接上服务器之后
socket.on('open',function(){
    console.log('连接已经打开');
    socket.send('服务器你好');
});
//监听对方发过来的消息
socket.on('message',function(msg){
    console.log(msg);
});
