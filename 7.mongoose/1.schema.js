var mongoose = require('mongoose');
//使用es6中的Promise对象替换monoose自带的Promise库
mongoose.Promise = Promise;
//协议 主机名 端口号 数据库名
mongoose.connect('mongodb://localhost/201606node');

/**
 * Schema规定了集合中文档的字段的名称和类型
 * 定义Schema 不能操作数据库
 */
var PersonSchema = new mongoose.Schema({
   username:{type:String,required:true},
   gender:{type:String,enum:['男','女']},
   email:{type:String,match:/[\s\S]+@[\s\S]+/},
   age:{type:Number,min:0,max:160},
   home:{type:String,validate:[valid,'必须是北京']}
    //手工指定集合的名称,如果不指定集合的名称，集合的名称就是模型的转小写再转复数
});
function valid(str){
    return str == '北京';
}
/**
 * 模型 依赖Schema
 * 可以操作数据库 二个参数表示定义一个模型
 * 1. 模拟代表的是整个集合，可以操作(增删改查)集中的所有元素
 * 类似于命令行中 db.person.update
 */
mongoose.model('Person',PersonSchema);
var personModel = mongoose.model('Person');
/**
 * 通过模型可以创建一个entity实体
 * 1. 实例通过模型创建
 * 实例是指单个文档对象 或个实例 ,只能操作自己
 * 保存entity对象的时候，只能保存在schema中定义的属性,如果在
 * schema中没有定义过，则进行忽略
 */
var personEntity = new personModel({
    username:'zhangsan',
    email:'zhangsan@qq.com',
    gender:'男',
    home:'北京'
});
//把自己这个文档对象保存到数据库对应中的集合中
personEntity.save().then(function(data){
    console.log(data);
},function(err){
    console.log(err);
});

console.log((4700).toString(16));


