/**
 * 一个字节表示 0-255
 **/
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
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
 * 只支持转中文字符串
 */
/**
 * 1. 把原字符串转成二进制字符串
 * 2. 以3个字节为一组，分成四组，每一组对应一个索引号
 * 3. 把索引号对应的字符拼成一个字符串
 */
/*function toBase64 (str) {
    var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
    var buffer=new Buffer(str);
    var str='';
    for (var i=0;i<buffer.length;i++) {
        var a= buffer[i].toString(2);
        str+=a;
    }
    var arr=[];
    //中国 6个字节 48位  48/6=8
    str=str.replace(/\d{6}/g,function  (matched) {
        arr.push(arguments[0]);
    })
    var arr1=[];
    arr.forEach(function  (item) {
        var result=parseInt(item,2)
        arr1.push(result)
    })
    var result='';
    for (var k=0;k<arr1.length;k++) {
        result+=chars[arr1[k]]
    }

    return result;
}*/
function toBase64 (str) {
    //先初始化字符数组 最终返回的结果是这些字符组成的
    var chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
    //通过字符串构建buffer
    var buffer=new Buffer(str);
    var str='';
    for (var i=0;i<buffer.length;i++) {
        //把buffer中的值转成二进制字符串 拼在一起
        var a= buffer[i].toString(2);
        str+=a;
    }
    //中国 6个字节 48位  48/6=8
    var result='';
    str.replace(/\d{6}/g,function  (matched) {
        // matched是六位一组的字符子串
        // parseInt负责把它们转成10进制数
        // chars从字符数组按索引取出对应的字符 拼在一起
        result+=chars[parseInt(matched,2)];
    })
    return result;
}
console.log(toBase64('中国'));


