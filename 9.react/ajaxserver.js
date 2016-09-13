var express = require('express');
var app = express();
//请求url /su?cb=jQuery_1473759721709&wd=a
//返回 jQuery_1473756671737({q:"ab",p:false,s:["abo"]});
app.get('/su',function(req,res){
    var cb = req.query.cb;
    var wd = req.query.wd;
    var result = {q:wd,p:false,s:[]};
    for(var i=0;i<10;i++){
        result.s.push(`${wd}_${i}`);
    }
    res.setHeader('Access-Control-Allow-Origin','*');
    res.send(`${cb}(${JSON.stringify(result)})`);
});
app.listen(8080);