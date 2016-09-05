var fs = require('fs');
//首先，准备一个包含64个字符的数组
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
//然后，对二进制数据进行处理，每3个字节一组，一共是3x8=24bit，划为4组，每组正好6个bit：
//这样我们得到4个数字作为索引，然后查表，获得相应的4个字符，就是编码后的字符串。
//所以，Base64编码会把3字节的二进制数据编码为4字节的文本数据


fs.readFile('./avatar.jpg', 'base64', function (err, data) {
    console.log(data);
})

fs.readFile('./base64.txt', function (err, data) {
    console.log(base64(data));
})

function base64(buf) {
    var binaryStr = ''
    for (var i = 0; i < buf.length; i++) {
        binaryStr += buf[i].toString(2);
    }

    var subStrings = [];
    var index = 0;
    var curr;
    do {
        curr = binaryStr.substr(index, 6);
        if (curr.length) {
            index += curr.length;
            subStrings.push(curr);
        }
    } while (curr.length > 0);

    var result = [];

    for (var i = 0; i < subStrings.length; i++) {
        result.push(chars[parseInt(subStrings[i], 2)]);
    }
    return result.join('');
}


