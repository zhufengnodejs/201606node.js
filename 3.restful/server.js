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
        else{
            //取得查询字符串中的ID属性
            var id = req.query.id;
            if(id){//如果ID有值，表示查询单个用户
                //在原来的数组中查找此用户
                var user = users.find(function(item){
                    return item.id == id;
                })
                res.send(user);//把找到的用户返回给客户端
            }else
                res.send(users);
        }

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
//删除用户
// 1.查询原来的用户列表
// 2. 删除要删除的用户
// 3.把剩余的用户全部保存到文件系统中
// 4 返回空元素
app.delete('/users',function(req,res){
    var id = req.query.id;
    getUsers(function(err,users){
        if(err)
            res.sendError(err);
        else{
            //把要删除的删除掉,删除的元素返回false
            // filter会返回一个新数组，原数组并不能被改变，所以重新覆盖
            users = users.filter(function(item){
                return item.id != id;
            });
            //把过滤后的数组保存一下
            setUsers(users,function(err){
                if(err)
                    res.sendError(err);
                else
                    res.send({});//如果没错误则发送空对象到客户端
            })
        }
    })
});
//更新用户
app.put('/users',function(req,res){
    var user = req.body;// user= {id:1,name:'张三3'}
    getUsers(function(err,users){
        if(err)
            res.sendError(err);
        else{
            users = users.map(function(item){
                if(item.id == user.id){
                    return user;
                }else{
                    return item;
                }
            });
             //把更新后的数组保存一下
            setUsers(users,function(err){
                if(err)
                    res.sendError(err);
                else
                    res.send(user);//如果没错误则发送空对象到客户端
            })
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
                try{
                    users = JSON.parse(data);
                    callback(err,users);
                }catch(err){
                    users = [];
                    callback(err,users);
                }
            })
       }else{
           callback(null,[]);
       }
   })
}



app.listen(8080);