const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58841d35456f7413544568a211';

// if (!ObjectID.isValid(id)) {// validate id using ObjectID
// 	console.log('ID not valid');
// }

// // return array of documents
// Todo.find({
// 	_id: id // no need ObjectID in mongoose
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// // use when finding one by something other than ID
// Todo.findOne({
// 	_id: id // no need ObjectID in mongoose
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// // use when finding one by ID
// Todo.findById(id).then((todo) => {
// 	if (!todo) { // handle if id doesn't exist
// 		return console.log('Id not found');
// 	}

// 	console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var id = '5883eca558fb871e047424fe';

User.findById(id).then((user) => {
	if (!user) {
		return console.log('Unable to find user');
	}

	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
});
