/**
 * 读取url中的电影列表并传给callback
 * @param url http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1
 * @param callback 两个参数，第一个参数错误对象，第二个参数是电影列表
 */
var request = require('request');
var iconv = require('iconv-lite');
var fs = require('fs');
var cheerio = require('cheerio');
exports.read = function(url,callback){
  request({
      url,
      encoding:null
  },function(err,response,body){
      if(err){
          callback(err);
      }else{
          var result = iconv.decode(body,'gbk');
          var $ = cheerio.load(result);
          var items = [];
          $('.keyword .list-title').each(function(){
              var $me =  $(this);
              var item = {
                  name:$me.text(),
                  url:$me.attr('href')
              }
              items.push(item);
          });
          callback(err,items);
      }
  })
}
exports.read('http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1',function(err,items){
    console.log(items);
});