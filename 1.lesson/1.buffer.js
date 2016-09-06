/**
 * 一个字节表示 0-255
 **/
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-/'.split('');
var buffer = new Buffer('中');
//知道如何把一个buffer对象转成字符串 默认编码是utf8
console.log(buffer[0].toString(2));
console.log(buffer[1].toString(2));
console.log(buffer[2].toString(2));
// 把三个二进制数拼成一个串
// 111001001011100010101101
// 分成四组
// 111001 001011 100010 101101
console.log(parseInt('111001',2));
console.log(parseInt('001011',2));
console.log(parseInt('100010',2));
console.log(parseInt('101101',2));
// 57 11 34 45
console.log(chars[57]+chars[11]+chars[34]+chars[45]);

// buffer[0].toString(2) 可以把10进制转成2进制
/**
 * base64 自己实现从字符串到base64编码的转换过程
 */
/**
 * // 一个汉字在utf8编码时对应3个字节 e4 b8 ad
 * 1. 先构建一个由64个可见字符组成的数组
 * 2.
 */


/**
 * 1个字节是8位
 * 以3个字节为一组，转成四组，一组6个二进制数，这个数的十进制值就代表
 * 数组的索引
 *
 */
function toBase64(str){
    var result ='';
    return result;
}

toBase64('中');


