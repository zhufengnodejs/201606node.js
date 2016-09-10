/**
 *  准备十条测试数据
 */
var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/201606node');
var PersonSchema = new mongoose.Schema({
    name: String,
    age: {type: Number, default: 0}
});
var PersonModel = mongoose.model('Person', PersonSchema);
//var users = [];
//for(var i=1;i<=10;i++){
//    users.push({name:'zfpx'+i,age:i});
//}//批量保存文档对象数组
//PersonModel.create(users).then(function(data){
//    console.log(data);
//},function(error){
//    console.error(error);
//});


/*PersonModel.findOne({age:5}).then(function(data){
 console.log(data);
 });*/
//将年龄等于5岁的年龄加5岁
/*PersonModel.update({age:5},{$inc:{age:5}}).then(function(data){
 console.log(data);
 });*/

/*
 PersonModel.remove({name:{$exists:false}}).then(function(data){
 console.log(data.result);
 },function(error){
 console.error(error);
 });*/

/*PersonModel.findOne({},{name:0}).then(function(data){
 console.log(data);
 });*/
//在mongoose里面操作_id都用字符串
/*
 PersonModel.findById('57d3c37b42b090139c2ccff1').then(function(data){
 console.log(data);
 });;*/
//年龄等于 1 3 5
/*PersonModel.find({$or:[{age:1},{age:3},{age:10}]}).then(function(data){
 console.log(data);
 });;*/
/*
 PersonModel.find({age:{$in:[1,3,10]}}).then(function(data){
 console.log(data);
 });;*/
/**
 *
 */
/*
 PersonModel.remove({}).then(function(data){
 console.log(data);
 });;*/
/*PersonModel.find({}).then(function(data){
    console.log(data);
});*/

var pageNum = 2;//当前页码
var pageSize = 3;//每页的条数
PersonModel.find({}).skip((pageNum - 1)*pageSize).limit(pageSize).sort({age: -1}).exec(function (err,data) {
    console.log(data);
});
//  7 6 5 4 3 2 1
