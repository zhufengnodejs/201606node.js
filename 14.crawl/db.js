var mongoose = require('mongoose');
mongoose.Promise = Promise;
var settings = require('./settings');
mongoose.connect(settings.dbUrl);
//定义schema
var MovieSchema = new mongoose.Schema({
    name: String,
    url: String
});
//定义模型
var Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;