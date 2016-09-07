var name = 'zfpx';
var age = 8;
var getName = function(){
    console.log(this.name);
}
var person = {
    name,
    age,
    getName
}
person.getName();

console.log(NaN == NaN);
//比较两个对象是否相等
console.log(Object.is(undefined,undefined));

var obj1 = {
    name:'zfpx'
}
var obj2 ={
    age:8
}
var obj = Object.assign({},obj1,obj2)
/*var obj = {};
for(var attr in obj1){
    if(obj1.hasOwnProperty(attr))
        obj[attr] = obj1[attr];
}
for(var attr in obj2){
    if(obj2.hasOwnProperty(attr))
        obj[attr] = obj2[attr];
}
*/
console.log(obj);

