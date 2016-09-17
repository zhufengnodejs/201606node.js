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
var CronJob = require('cron').CronJob;
//每隔30分钟执行一次
var job = new CronJob('0 */30 * * * *',function(){
 var  child_process = require('child_process');
 var child = child_process.spawn(process.execPath,['./tasks/main.js']);

});
job.start();



app.listen(9090);