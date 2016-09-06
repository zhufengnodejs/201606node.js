var express = require('express');
var app = express();
/**
 * restful接口的特点是 路径相同，通过请求方法名来判断对此资源做如何的操作
 */
app.route('/users')
    .get(function(req,res){res.send([{id:1},{id:2}])})
    .post(function(req,res){res.send({id:1})})
    .delete(function(req,res){res.send({})})
    .put(function(req,res){res.send({id:1})})
app.listen(80)