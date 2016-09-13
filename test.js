
var  result = '({"q":"a","p":false,"s":["a_0","a_1","a_2","a_3","a_4","a_5","a_6","a_7","a_8","a_9"]})';
var regex = new RegExp('\((\{.+\})\)') ;
var matches  = result.match(regex);
console.log(matches);
