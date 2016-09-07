var s1 = Symbol('zfpx');
var s2 = Symbol('zfpx');
console.log(s1 == s2);

var obj = {};
var attr = Symbol();
obj[attr] = 'zfpx';
console.log(obj[attr]);