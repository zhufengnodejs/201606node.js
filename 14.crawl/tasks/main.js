/**
 * 1.使用request发起请求，获取响应
 * 2. 使用cheerio解析响应体，分析出电影列表
 * 3. 把电影列表保存到数据库中
 * 4. 创建WEB应用服务器展示电影列表
 * 5. 启动计划任务，每半小时创建子进程更新数据
 * 6. 上传github并布署到阿里云
 **/
var read = require('./read').read;
var write = require('./write').write;
var async = require('async');
var url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
var debug = require('debug')('crawl:main');
// mongod --dbpath=./data
async.waterfall([
   function(callback){
       read(url,function(err,items){
            callback(err,items);
       });
   },
    function(data,callback){
        write(data,callback);
    }
],function(err,result){
   //console.log(result);
    debug('全部任务执行完毕');
    process.exit(0);
})

