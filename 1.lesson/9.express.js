var express = require('express');
var app = express();
app.set('view engine','ejs');
app.set('views',__dirname);

app.get('/',function(req,res){
    // end里只能是字符串或Buffer
    // send里可以是任意类型 对象 数组 数字
    // send的原理是根据参数类型不同把不同类型的数据转成字符串，然后调用end方法
    res.send({name:'zfpx'});
});
app.get('/books',function(req,res){
   res.render('books',{name:'珠峰书店',books:[
       {id:1,name:'nodejs'},{id:2,name:'angular baby'}
   ]});
});
app.listen(9090);