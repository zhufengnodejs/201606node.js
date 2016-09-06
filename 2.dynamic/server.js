var express = require('express');
var path = require('path');
var app = express();
var routes = require('./routes');
app.get('/',function(req,res){
    //sendFile参数必须是一个绝对路径
    res.sendFile(path.resolve('./index.html'));
});
/**
 * restful接口的特点是 路径相同，通过请求方法名来判断对此资源做如何的操作
 */
routes(app);
app.listen(8080)