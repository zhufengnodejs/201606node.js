var spawn = require('child_process').spawn;
console.log(process.execPath);
spawn(process.execPath,['./dead.js']);
spawn(process.execPath,['./dead.js']);
//require('./dead.js');
console.log('after');
setInterval(function(){
    console.log('one second later');
},1000);


