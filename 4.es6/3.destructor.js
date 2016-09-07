/**
 * constructor 创建
 * destructor  反创建
 */
var arr = [1,2,3,[4,5]];
/*var a = arr[0];
var b = arr[1];
var c = arr[2];*/
let [a,b,c,[d,e]] = arr;
console.log(a,b,c,d,e);

var person = {id:1,name:'zfpx',hobby:['1','2','3','4']};
/*var id = person.id;
var name = person.name;*/
//Rest element must be last element in array
//其余元素必须是一个数组中的最后一个元素
let {id,name,hobby:[first,second,...last]} = person;
console.log(id,name,first,second,last);
//把person的id属性赋给当前作用域的myid局部变量
let {id:myid,name:mynmae} = person;
console.log(myid,mynmae);