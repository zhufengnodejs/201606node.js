var child_process = require('child_process');
var cmd = `curl https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png -o xxx.png`;
function download(){
   child_process.exec(cmd);
}

download();