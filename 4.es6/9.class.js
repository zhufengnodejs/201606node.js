/*class Person{
    //构造函数
    constructor(name){
        //初始化私有属性
        this.name = new String(name);
    }
    getName(){//所有实例共享的方法
        console.log(this.name);
    }
}*/
function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){//所有实例共享的方法
    console.log(this.name);
}
var p1 = new Person('zfpx');
p1.getName();
var p2 = new Person('zfpx');
p2.getName();
console.log(p1.name === p2.name);
console.log(p1.getName === p2.getName);
