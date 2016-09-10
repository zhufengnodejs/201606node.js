/**
 * 如何实现有关系的多个集合之间的插入和查询
 * 讲师 课程
 * 课程有一个外键指向讲师的主键
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/201606node');
mongoose.Promise = Promise;
var ObjectId = mongoose.Schema.Types.ObjectId;
//定义一个讲师的schema
var TeacherSchema = new mongoose.Schema({
    name:String
});
//定义了一个讲师的模型 模型名称叫Teacher
var TeacherModel = mongoose.model('Teacher',TeacherSchema);
//定义一个课程的schema
var CourseSchema = new mongoose.Schema({
    name:String,
    //因为它保存的是讲师的主键，ref是引用的模型的名称
    teacher:{type:ObjectId,ref:'Teacher'}
});
var CourseModel = mongoose.model('Course',CourseSchema);
//先保存讲师的对象，
/*TeacherModel.create({
    name:'张三'
})
.then(function(teacher){//得到保存后的对象，多了_id属性
   console.log(teacher);
    return CourseModel.create({//保存课程对象
       name:'语文',
       teacher:teacher._id //指定本课程讲师外键是刚保存的讲师的主键
   });
})
.then(function(course){//刚保存的课程对象
    console.log(course);
}).catch(function(error){
    console.error(error);
});*/
/**
 * { __v: 0,
  name: '语文',
  teacher: 57d3d5c33a8f0c1ba8cbabf7,
  _id: 57d3d5c33a8f0c1ba8cbabf8 }
 **/

/*var c;
CourseModel.findOne({name:'语文'})
.then(function(course){
    c = course;
   return TeacherModel.findById(course.teacher);
}).then(function(teacher){
    c.teacher = teacher;
    console.log(c);
})*/
// populate用于把外键从ID变成对应文档的对象
CourseModel.findOne({name:'语文'}).populate('teacher')
    .then(function(course){
        console.log(course);
        return TeacherModel.findById(course.teacher);
    })
