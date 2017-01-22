const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// no doc returned
// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// doc returned
// Todo.findOneAndRemove({_id:'588457d97baabb153c4555ca'}).then((todo) => {
// 	console.log(todo);
// });

Todo.findByIdAndRemove('588457d97baabb153c4555ca').then((todo) => {
	console.log(todo);
});