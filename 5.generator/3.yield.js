/**
 * yield方法的返回值
 */

function* generator(){
    var a = yield 1;
    console.log('a=',a);
    var b = yield a+2;
    console.log('b=',b);
    var c = yield b+3;
    console.log('c=',c);
}
var it = generator();
it.next();//第一次next不需要参数
it.next(1);//1 会覆盖上一次yield前面声明的变量
it.next(2);
it.next(3);


