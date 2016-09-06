var express = require('express');
var app = express();
var routes = require('./routes');
/**
 * restful接口的特点是 路径相同，通过请求方法名来判断对此资源做如何的操作
 */
routes(app);
app.listen(80)