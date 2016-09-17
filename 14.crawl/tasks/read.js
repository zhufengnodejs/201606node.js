/**
 * 读取url中的电影列表并传给callback
 * @param url http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1
 * @param callback 两个参数，第一个参数错误对象，第二个参数是电影列表
 */
var request = require('request');
var iconv = require('iconv-lite');
var fs = require('fs');
var cheerio = require('cheerio');

var debug = require('debug')('crawl:read');
exports.read = function(url,callback){
  request({
      url,
      encoding:null
  },function(err,response,body){
      if(err){
          callback(err);
      }else{
          //把buffer类型的响应体转成utf8字符串
          var result = iconv.decode(body,'gbk');
          //把这个字符串转成$对象
          var $ = cheerio.load(result);
          var items = [];//创建一个空数组
          debug('开始读取电影列表');
          //迭代每个a标签
          $('.keyword .list-title').each(function(){
              var $me =  $(this);
              var item = {
                  name:$me.text(),
                  url:$me.attr('href')
              }
              debug('读到电影:'+item.name);
              items.push(item);
          });
          debug('完成读取电影列表');
          callback(err,items);
      }
  })
}

exports.read('http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1',function(err,items){
    //console.log(items);
});
