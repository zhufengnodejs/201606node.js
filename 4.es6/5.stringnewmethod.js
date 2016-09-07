/**
 * 字符串的新方法
 */
var str = 'abcde';
console.log(str.includes('c',2));
console.log(str.slice(2).indexOf('c')!=-1);

console.log(str.startsWith('c',2));
console.log(str.slice(2).indexOf('c')==0);

console.log(str.endsWith('b',2));
console.log(str.slice(0,2).lastIndexOf('b') == 2-'b'.length);
String.prototype.repeat = function(times){
    var str = '';
    for(let i=0;i<times;i++){
        str += this;
    }
    return str;
}
console.log(str.repeat(3));

function to(name,age=8){
    console.log(name,age);
}
to('zfpx');

var arr = [1,2,3,4];
var arr2 = [5,6,7];
function print(a,b,c){
    console.log(a,b,c);
}
//print.apply(null,arr);
//print(...arr);

//console.log(Math.max.apply(null,arr));
console.log(Math.max(...arr));

console.log(arr.concat(arr2));
console.log([...arr,...arr2]);
// 5 * 4 * 3 * 2 * 1 = 120
var multiply = function multi(num){
    if(num == 1) return 1;
    return num * multi(--num)
}
console.log(multiply.name);//函数的名字
console.log(multiply(5));

var nums = [1,2,3];
console.log(nums.map((item,index)=>{
    console.log(item*2);
    return item*2;
}));




