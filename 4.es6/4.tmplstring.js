var name = 'zfpx';
var age = 8;
//模板字符串 可以换行 可以内嵌变量
//var desc = translate('<div>${name} is ${age} 岁了! </div>');
//console.log(desc);// <div>zfpx is 8 岁了! </div>
//如何做到把模板字符串替换成实际字符串
//就是把里面的变量名用实际的值替换掉
/*function translate(str){
    return str.replace(/\${(\w+)}/g,function(){
        return eval(arguments[1]);
    });
}*/
//此函数用来自行去拼接字符串 自己实现从模板字符串到普通字符串的转换
//希望把变量的值全部转成大写
function desc(strings,...values){
    var str = '';
    for(let i=0;i<values.length;i++){
        str += (strings[i]+(values[i]+'').toUpperCase());
    }
    str += strings[values.length];
    return str;
}

var tmplstr = desc`say: ${name} is ${age} years old!`;
console.log(tmplstr);
