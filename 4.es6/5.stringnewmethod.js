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
    console.log(index,item*2);
    return item*2;
}));
/*Array.prototype.from = function(args){
  var newArr=[];
  for(var i=0;i<args.length;i++)//类数组有长度和索引的key
    newArr.push(args[i]);
  return newArr;
}*/
/**
 * 数组的新方法
 */
function sum(a,b){
 //var args = Array.prototype.slice.call(arguments);
 var args = Array.from(arguments);//把类数组转成数组
 //return eval(args.join('+'));
 //收敛 会一个数组经过计算得到一个唯一的值
 return args.reduce(function(curr,item){
    return curr + item;
 },0);
}
console.log(sum(1,2,3,4,5));

Array.prototype.reduce = function(reducer,initVal){

}
var args = [1,2,3];
//把数组中的所有的元素依次传入函数中
//第一次的时候 curr=初始值 item为数组中的第一个元素
//第二次的时候 curr=上一次函数执行的返回值 item为数组中的第二个元素
//第三次的时候 curr=上一次函数执行的返回值 item为数组中的第三个元素
var result = args.reduce(function(curr,item){
    return curr + item;
},5);
console.log(result);
