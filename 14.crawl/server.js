/**
 * 创建一个服务器展示保存的数据
 **/
var Movie = require('./db');
var express = require('express');
var path = require('path');
var app = express();
//指定模板的存放路径
app.set('views',path.resolve('views'));
app.set('view engine','html');
app.engine('html',require('ejs').__express);
app.get('/',function(req,res){
    Movie.find().then(function(movies){
         res.render('index',{movies});
    }).catch(function(err){
        res.status(500).send(err);
    })
});


app.listen(9090);