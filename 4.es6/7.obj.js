/*
var obj1 = {
    name:'zfpx1'
}
var obj2= {
    name:'zfpx2'
}
var obj3= {
    name:'zfpx3'
}
var obj = {
    __proto__:obj3//可以在对象字面量中声明原型对象
};
console.log(obj.name);
console.log(Object.getPrototypeOf(obj));

Object.setPrototypeOf(obj,obj1);
//obj.__proto__ = obj1;
console.log(obj.name);
console.log(Object.getPrototypeOf(obj));
console.log(obj.__proto__);

Object.setPrototypeOf(obj,obj2);
//obj.__proto__ = obj2;
console.log(obj.name);
console.log(Object.getPrototypeOf(obj));
console.log(obj.__proto__);
*/

var obj1 = {
    name:'zfpx1',
    hobby(){
        return 'drinking';
    }
}
var zhou = {
    __proto__:obj1,
    hobby(){
        return 'smoking+'+super.hobby();
    }
}
console.log(zhou.hobby());
console.log(zhou.__proto__.hobby());
//传入一个对象，作为返回对象的原理__proto__
//Object.create = function(proto){
   /* return {
        __proto__:proto
    }*/

    /*function Temp(){};
    Temp.prototype = proto;
    return new Temp();*/

    /*var obj={};
    Object.setPrototypeOf(obj,proto);
    return obj;*/
//}
/*
var obj = Object.create(obj1);
console.log(obj.name);
console.log(obj.__proto__ == obj1);
*/

