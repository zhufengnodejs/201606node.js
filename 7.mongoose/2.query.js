/**
 *  准备十条测试数据
 */
var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/201606node');
var PersonSchema = new mongoose.Schema({
    name:String,
    age:{type:Number,default:0}
});
var PersonModel = mongoose.model('Person',PersonSchema);
var users = [];
for(var i=1;i<=10;i++){
    users.push({name:'zfpx'+i,age:i});
}//批量保存文档对象数组
PersonModel.create(users).then(function(data){
    console.log(data);
},function(error){
    console.error(error);
});


