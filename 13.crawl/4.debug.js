var debug = require('./debug');
var loggerA = debug('logger:A');
//是控制台输出日志
//会读环境变量中的DEBUG的值
/**
 * 环境变量 环境中的变量
 * 温度 湿度
 */
loggerA('a'); //console.log('a');
var loggerB = debug('logger:B');
loggerB('b');