var name = 'zfpx';
var age = 8;
//模板字符串 可以换行 可以内嵌变量
var desc = translate('<div>${name} is ${age} 岁了! </div>');
console.log(desc);// <div>zfpx is 8 岁了! </div>
//如何做到把模板字符串替换成实际字符串
//就是把里面的变量名用实际的值替换掉
function translate(str){

}
