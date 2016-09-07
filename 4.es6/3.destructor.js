/**
 * constructor 创建
 * destructor  反创建
 */
var arr = [1,2,3,[4,5]];
/*var a = arr[0];
var b = arr[1];
var c = arr[2];*/
let [a,b,c,[d,e]] = arr;
//console.log(a,b,c,d,e);

var person = {id:1,name:'zfpx',hobby:['1','2','3','4']};
/*var id = person.id;
var name = person.name;*/
//Rest element must be last element in array
//其余元素必须是一个数组中的最后一个元素
let {id,name,hobby:[first,second,...last]} = person;
//console.log(id,name,first,second,last);
//把person的id属性赋给当前作用域的myid局部变量
let {id:myid,name:myname} = person;
//console.log(myid,myname);


function ajax1(options){
    var url = options.url;
    if(!url)
        throw Error('url必须提供');
    var method = options.method;
    method = method?method:'GET';
    var data = options.data;
    data = data?data:{};
    var dataType = options.dataType;
    dataType = dataType?dataType:'json';
}
//默认值 如果使用此函数的时候传了此参数，则使用传的参数
//如果没有传此参数，则使用默认值
function ajax({url=new Error('url必须提供'),method='GET',data={},dataType="json"}){
    console.log(url,method,data,dataType);
}
ajax({
    url:'/a'
   /* url:'/a',
    method:'POST',
    data:{id:1},
    dataType:'xml'*/
});
