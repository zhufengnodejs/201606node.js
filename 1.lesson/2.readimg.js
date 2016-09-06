var fs = require('fs');
fs.readFile('./face.jpg','base64',function(err,data){
    console.log(data);
})