/*if(true){
    //let a = 1;
    setTimeout(function(){
        console.log('inner',a);
    },1000)
}
let a = 2;
//a is not defined
console.log('outer',a);*/

/*
var a = 2;
console.log(a);
console.log(b);
for(var i=0;i<3;i++){
    setTimeout(function(){
        console.log(i);
    },1000)
}
var b = 'b';*/
/*

let a = -1;
let globalb = 'globalb';
function say(){
    let a = 0;
    let sayb = 'sayb';
    {
        let a = 1;
        console.log('first ',a,sayb,globalb);
    }
    {
        let a = 2;
        console.log('second ',a,sayb);
    }
    console.log('say: ',a,globalb);
}
say();
console.log('outer ',a);*/

for(let i=0;i<3;i++){
    setTimeout(function(){
        console.log(i);
    },1000)
}
//Identifier 'a' has already been declared
//在同一个作用域内不能声明两个相同名称的变量
{
    let a = 1;
    let a = 2;
}

{
    let xxx = 'xxx';

}