var mongoose = require('mongoose');

// mongoDB Configuration
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};