var express = require('express');
var path = require('path');
var app = express();
/**
 * 在页面里嵌入一个隐蔵iframe，将这个隐蔵iframe的src属性设为对一个长连接的请求，服务器端就能源源不断地往客户端输入数据。
 优点：消息即时到达，不发无用请求。
 缺点：服务器维护一个长连接会增加开销。
 实例：Gmail聊天
 http://blog.csdn.net/xxd851116/article/details/10022015
 **/
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'time.html'));
});
app.get('/time', function (req, res) {
    setInterval(function(){
        res.write(`
    <script>
    parent.show('${new Date().toLocaleString()}');
</script>
    `);
    },2000)
});
app.listen(9090);