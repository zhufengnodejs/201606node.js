function EventEmitter() {
    this._events = {};
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
    var events = this._events;
    var listeners = events[type];
    if (listeners) {
        listeners.push(listener);
    } else {
        events[type] = listener;
    }
};

EventEmitter.prototype.emit = function emit(type) {
    var events = this._events;
    var listeners = events[type];
    for (var i = 0; i < listeners.length; ++i)
        listeners[i].call(self, Array.prototype.slice.call(arguments, 1));
};