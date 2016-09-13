var url = 'https://www.baidu.com/su?wd=a&cb=a';
var http = require('http');
var options = {
    protocol:'http:',
    host:'www.baidu.com',
    method:'get',
    path:'/su?wd=a&cb=a'
};
http.request(options,function(err,resonse,body){
    console.log(arguments);
})