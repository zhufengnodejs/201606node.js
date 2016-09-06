/**
 * Object.setPrototypeOf(ctor.prototype, superCtor.prototype);
 */
function Ctor(){}
function SuperCtor(){}
SuperCtor.prototype.say = function(){
    console.log('hello');
}
//设置某个对象的原型
//子类的prototype的__proto__指向父类的prototype
/*Object.setPrototypeOf(Ctor.prototype, SuperCtor.prototype);*/
Ctor.prototype.__proto__ = Object.create(SuperCtor.prototype);

var c = new Ctor();
c.say();
