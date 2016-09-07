// name=%E5%BC%A0%E4%B8%89&age=5
/**
 * URL不支持中文件 只支持ascii码
 * @type {string}
 */
var str = '张三';
console.log(encodeURIComponent(str));
console.log(decodeURIComponent('%E5%BC%A0%E4%B8%89'));
console.log(new Buffer(str));
