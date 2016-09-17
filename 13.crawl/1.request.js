var request = require('request');
var iconv = require('iconv-lite');
//把node作为http客户端，向url发起请求，把取回来的数据放在响应里
request({url:'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1',encoding:null},function(err,response,body){
// err错误对象 response是响应对象 body 响应体
    if(!err || response.statusCode == 200){
        //console.log(body);
        //1参数是原Buffer 2参数是指此buffer原来是什么编码
        var result = iconv.decode(body,'gbk');
        console.log(result);
    }
})