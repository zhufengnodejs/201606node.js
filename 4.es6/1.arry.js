var arr = [{id:1},{id:2},{id:2}];
var arr2 = [{id:1,name:'zfpx1'},{id:2,name:'zfpx2'},{id:2,name:'zfpx2'}];
Array.prototype.map = function(fn){
   var newArray = [];//构建一个新的数组
   for(var i=0;i<this.length;i++){//循环老数组
       newArray.push(fn(this[i]));//把老数组的每个元素依次传入fn
       //把执行后的返回值依次添加到新数组里
   }
   return newArray;
}
var arr3 = arr.map(function(item){
    item.name = 'zfpx'+item.id;
    return item;
})
console.log(arr3);
//var val = 2;
/*

for(var i=0;i<arr.length;i++){
    if(arr[i] == val){
        console.log(arr[i]);
        break;
    }
}*/
/*var item = arr.findIndex(function(item){
    return item.id == val;
});
console.log(item);*/
