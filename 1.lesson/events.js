//构造函数
function EventEmitter(){
  this._events = {};
}
//注册监听
EventEmitter.prototype.on = function(type,listener){
    //取出在事件对象上对此事件类型的监听函数数组
    var listeners = this._events[type];
    if(listeners){ //如果有值，意味着有人监听过了
        //把此监听追加到数组里
        listeners.push(listener);
    }else{
        //如果没有值 创建一个新的数组
        this._events[type] = [listener];
    }
}
//发射事件
EventEmitter.prototype.emit = function(type){
    //先取出事件对象中对此事件的监听函数数组
    var listeners = this._events[type];
    //如果有值的话
    if(listeners){
        //循环迭代此数组并依次执行
        for(var i=0;i<listeners.length;i++){
            listeners[i]();
        }
    }
}

module.exports = EventEmitter;