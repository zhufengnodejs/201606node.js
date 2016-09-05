var fs = require('fs');
var path = require('path');

/*
 function mkdirs(dirname) {
 var dirs = dirname.split(path.sep);
 for(var i=1;i<=dirs.length;i++){
 var sub = dirs.slice(0,i).join(path.sep);
 if(!fs.existsSync(sub))
 fs.mkdirSync(sub);
 }
 }
 */

/*function mkdirs(dirname, callback) {
 fs.exists(dirname, function (exists) {
 if (exists) {
 callback();
 } else {
 mkdirs(path.dirname(dirname), function () {
 fs.mkdir(dirname, callback);
 });
 }
 });
 }*/

/*function mkdirs(dirname,callback){
 fs.exists(dirname,function(exists){
 if(exists){
 callback();
 }else{
 mkdirs(path.dirname((dirname),function(){
 fs.mkdir(dirname,callback)
 }))
 }
 })
 }*/


function mkdirp(p) {
    var arr = p.split(path.sep);
    var index = 1;
    make();
    function make() {
        var sub = arr.slice(0, index++).join(path.sep);
        fs.exists(sub, function (exists) {
            if (!exists) {
                fs.mkdir(sub,make)
            }
        })

    }
}

mkdirp(path.join('a', 'b', 'c'), function () {
    console.log('ok');
})