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
/*var users = [];
for(var i=1;i<=10;i++){
    users.push({name:'zfpx'+i,age:i});
}//批量保存文档对象数组
PersonModel.create(users).then(function(data){
    console.log(data);
},function(error){
    console.error(error);
});*/


/*PersonModel.findOne({age:5}).then(function(data){
    console.log(data);
});*/
//将年龄等于5岁的年龄加5岁
/*PersonModel.update({age:5},{$inc:{age:5}}).then(function(data){
    console.log(data);
});*/
PersonModel.find({}).then(function(data){
    console.log(data);
});
/*
PersonModel.remove({name:{$exists:false}}).then(function(data){
    console.log(data.result);
},function(error){
    console.error(error);
});*/
