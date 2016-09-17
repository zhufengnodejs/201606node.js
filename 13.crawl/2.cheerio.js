var html = `
<td class="keyword">
  <a class="list-title" target="_blank" href="/id/356" >大话西游3</a>
</td>
<td class="keyword">
  <a class="list-title" target="_blank" href="/id/340" >微微一笑很倾城</a>
</td>`;
var cheerio = require('cheerio');
var $ = cheerio.load(html);
var items = [];
$('td a').each(function(){
    var $me = $(this);
    var item = {
        name:$me.text(),
        url:$me.attr('href')
    }
    // /id/340
    var result = item.url.match(/\/id\/(\d+)/);
    //var result = /\/id\/(\d+)/.exec(item.url);
    //console.log(result);
    var id = result[1];
    item.id = id;
    items.push(item);
});
console.log(items);
