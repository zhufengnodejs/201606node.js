var fs = require('fs');
var USERS = './users.json';
module.exports = function (app) {
    app.route('/users')
        .get(function (req, res) {
            res.send([{id: 1}, {id: 2}])
        })
        .post(function (req, res) {
            var user = req.body;//先获取请求体
            getUsers(function(err,users){//获取原来的用户列表
                if(err){//如果读取原来的用户列表出错发送错误响应
                    sendError(err);
                }else{//如果成功则设置ID
                    user.id = users[users.length-1].id+1;
                    users.push(user);//添加到原来的列表中
                    setUser(users,function(err,result){//把新的列表保存文件系统中
                        if(err){//保存出错，则发送错误
                            sendError(err);
                        }else{// 保存成功返回添加ID后的用户
                            res.send(user);
                        }
                    })
                }
            });
        })
        .delete(function (req, res) {
            res.send({})
        })
        .put(function (req, res) {
            res.send({id: 1})
        })

    function sendError(err){
        res.statusCode = 500;
        res.send(err);
    }
    //封装了一个获取所有用户的方法
    function getUsers(callback){
        //先判断此json文件是否存在
        fs.exists(USERS,function(exists){
            if(exists){//如果存在则按utf8编码读取文件内容
                fs.readFile(USERS,'utf8',function(err,data){
                    var users = JSON.parse(data);//转成json对象的数组
                    callback(err,users);
                })
            }else{
                callback(null,[]);
            }
        })
    }
    //保存用户数组
    function setUser(users,callback){
        fs.writeFile(USERS,JSON.stringify(users),callback)
    }
}