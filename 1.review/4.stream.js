var fs = require('fs');
var ws = fs.createWriteStream('./2.txt',{highWaterMark:5});
var i = 0;
function write(){
    var flag = true;
    while (flag&&i<10){
        flag = ws.write(''+i++);
    }
}
write();
ws.on('drain', function () {
    console.log('drain');
    write();
});