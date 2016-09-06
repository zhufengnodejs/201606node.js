var EventEmitter = require('./events');
var util = require('util');
function Girl(){
    EventEmitter.call(this);
}
util.inherits(Girl,EventEmitter);
var girlGod = new Girl();
function Boy(){
}
var boya = new Boy();
boya.say = function(things){
    console.log('今天早点睡','明天我们去'+things);
}
var boyb = new Boy();
boyb.say = function(things){
    console.log('你也失眠啊，我也是呀不如现在一起去',things);
}
girlGod.on('sleepless',boya.say);
girlGod.on('sleepless',boyb.say);

girlGod.emit('sleepless','看电影');