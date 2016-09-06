var EventEmitter = require('./events');
var util = require('util');
function Girl(){
    EventEmitter.call(this);
}
util.inherits(Girl,EventEmitter);
//Object.setPrototypeOf(ctor.prototype, superCtor.prototype);
var girlGod = new Girl();
function Boy(){
}
var boya = new Boy();
boya.say = function(things,things2){
    console.log('今天早点睡','明天我们去'+things,things2);
}
var boyb = new Boy();
boyb.say = function(things,things2){
    console.log('你也失眠啊，我也是呀不如现在一起去',things,things2);
}
girlGod.on('sleepless',boya.say);
girlGod.on('sleepless',boyb.say);

girlGod.emit('sleepless','看电影','KTV');