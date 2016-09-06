var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
//使用bodyparser之后会在 req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname));
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