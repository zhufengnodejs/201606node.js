/*class Document{
    constructor(){
        this.cookies = [];
    }
    set cookie(cookie){
        this.cookies.push(cookie);
    }
    get cookie(){
        return this.cookies.join('; ')
    }
    static add(a,b){
        return a+b;
    }
}

var document = new Document();
document.cookie = 'name=zfpx';
document.cookie = 'age=6';
console.log(document.cookie);
console.log(Document.add(1,2));*/

class Person{
  constructor(name){
        this.name = name;
  }
}

class Student extends Person{
    constructor(name,age){
        super(name);
        //在子类的构造函数中，必须先调用父类构造函数
        this.age = age;
    }
}
var stu = new Student('zfpx',8);
console.log(stu);
//console.log(Person.__proto__ == Function.prototype);
//Person.prototype.age = 8;
//console.log(Person.age);
