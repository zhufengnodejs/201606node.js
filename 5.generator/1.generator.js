/**
 * Generator生成器 类似于一个普通函数
 * 它会返回一个迭代器
 */
function generator(books){
    //返回一个迭代器
   let index = 0;
    //返回一个迭代器
   return {
       next(){
           //判断是否已经迭代完成
           var done = index >= books.length;
           //当前迭代到的值
           let value = done?undefined: books[index++];
           return {
               value,//当前的值
               done //表示是否迭代完成
           }
       }
   }
}
var iterator = generator(['java','javascript','nodejs']);
var result = iterator.next();
console.log(result);
result = iterator.next();
console.log(result);
result = iterator.next();
console.log(result);
result = iterator.next();
console.log(result);