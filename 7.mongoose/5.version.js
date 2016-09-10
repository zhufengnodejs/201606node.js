var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/201606blog');
var PersonSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    courses:[String]//一个人选修了多少门课
});
//{versionKey:false}
var PersonModel = mongoose.model('Person',PersonSchema);
console.time('cost');
PersonModel.create({name:'zfpx'},function(err,doc){
    console.log(doc.courses);//空数组
    PersonModel.findById(doc._id,function(err,doc){
        console.log('第一doc.courses=',doc.courses);
        doc.courses.push('node');
        console.log('第一doc.courses=',doc.courses);
        setTimeout(function(){
            doc.save(function(err,doc){
                console.log(doc);// doc.courses = ['node'];
            });
        },5000);
    })

    PersonModel.findById(doc._id,function(err,doc){
        console.log('第二doc.courses=',doc.courses);
        doc.courses.push('js');
        console.log('第二doc.courses=',doc.courses);
        setTimeout(function(){
            doc.save(function(err,doc){
                console.log(doc);//doc.course js
                console.timeEnd('cost');
            });
        },10000);
    })
});