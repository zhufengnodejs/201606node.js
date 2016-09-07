/**
 * 无常 变化 有常
 * 常量就是恒定不变的量，一旦定义之后就不能再修改了
 */
const NAME = 'zhangsan';
//Assignment to constant variable.
//你试图给一个常量变量赋值
//NAME = 'zhangsan2';
//引用不能改，但是对象属性可以改
const WIFE = {gender:'女',name:'pan'};
WIFE.age = 32;
console.log(WIFE);



