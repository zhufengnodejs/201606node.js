//var co = require('co');
var fs = require('fs');
function co(gene){
    var it = gene();
    next();
    function next(data){
        var result = it.next(data);
        if(!result.done){
            result.value.then(next);
        }

    }
}
function* generator() {
    var first = yield new Promise(function (resolve, reject) {
        fs.readFile('1.txt', 'utf8', function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        })
    });
    var second = yield new Promise(function (resolve, reject) {
        fs.readFile(first, 'utf8', function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        })
    });
    var third = yield new Promise(function (resolve, reject) {
        fs.readFile(second, 'utf8', function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        })
    });
    console.log(third);
    return third;
}

co(generator);