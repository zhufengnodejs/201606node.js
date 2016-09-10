/**
 * 每次循环的时候都要重新绑定变量
 */
/*

for(let i=0;i<3;i++){
    console.log(i);
    let i = 100;
    /!*(function(i){
       setTimeout(function(){
           console.log(i);
       },1000)
   })(i)*!/
}*/

var  i = 100;
{
    var i =1;
    console.log(i);
    //let i = 8;

}