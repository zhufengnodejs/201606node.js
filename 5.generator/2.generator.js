/**
 * yield把一个函数的执行分成为若干个阶段
 * 每遇到yield会让生成器函数暂停执行,并把yield后面的值返回
 */
function* generator() {
    console.log(1);
    yield 'a';//产出
    console.log('a');
    yield 'b';
    console.log('b');
}
//调用生成器会返回迭代器
var it = generator();
var result;
do {
    result = it.next();
    console.log(result)
} while (!result.done);