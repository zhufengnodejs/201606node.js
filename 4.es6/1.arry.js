var arr = [{id:1},{id:2},{id:2}];
var val = 2;
/*

for(var i=0;i<arr.length;i++){
    if(arr[i] == val){
        console.log(arr[i]);
        break;
    }
}*/
var item = arr.findIndex(function(item){
    return item.id == val;
});
console.log(item);
