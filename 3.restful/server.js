var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
//定义一个常量，指向JSON文件路径，一定要大写
var USER_FILE = './users.json';
var app = express();
//通过读取请求头中的Content-Type字段可以得知请求体的类型
//处理请求体是application/json格式 请求体=>req.body
app.use(bodyParser.json());
//处理请求体是application/x-www-form-urlencoded 请求体=>req.body
app.use(bodyParser.urlencoded({extended:true}));
//中间件有三个参数
app.use(function(req,res,next){
    //为res增加自定义的方法
    res.sendError = function(error){
        res.statusCode = 500;
        res.send(error);
    }
    next();
});
/**
 * 1. 查询用户列表
 * GET /users
 */
app.get('/users',function(req,res){
    getUsers(function(err,users){
        if(err)
           res.sendError(err);
        else
           res.send(users);
    });
});

/**
 * 1. 增加用户
 * POST /users
 * 在请求体附加一个 {name:'张三'}
 * 在express使用中间件bodyparser,转成对象追加到req.body上
 */
app.post('/users',function(req,res){
   var user = req.body;// {name:'张三'}
   getUsers(function(err,users){
       if(err)
            res.sendError(err);
       else{
            //为user增加自动生成的ID值 最大的ID加1， 断号保留
           user.id = users.length>0?users[users.length -1].id+1:1;
           users.push(user);
           setUsers(users,function(err){
                if(err)
                  res.sendError(err);
                else
                  res.send(user);
           });
       }
   })

});
//获取我们文件系统中保存的所有用户
//如果是异步方法，它是没有返回值，需要提供一个回调函数在内部会在任务完成后调用回调函数，并把结果传给回调函数
//回调函数第一个参数一般是error对象，在 回调函数中可以判断error是否有值来判断是否出错了
function setUsers(users,callback){
  fs.writeFile(USER_FILE,JSON.stringify(users),function(err){
      callback(err);
  })
}
function getUsers(callback){
    //判断此文件是否存在
   fs.exists(USER_FILE,function(exists){
       if(exists){//如果存在，则读取文件内容
            fs.readFile(USER_FILE,'utf8',function(err,data){
                //把文件的内容转成JSON数组
            var users = JSON.parse(data);
                callback(err,users);
            })
       }else{
           callback(null,[]);
       }
   })
}



app.listen(8080);