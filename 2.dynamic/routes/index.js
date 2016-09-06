/**
 * 1. server.js 代码做好最精简
 * 2. 对修改关闭，对扩展开放
 * @param app
 */
module.exports = function(app){
   require('./user')(app);
   require('./category')(app);
}