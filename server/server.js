// Library imports
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser'); // convert json into obj attaching on to the req obj
var {ObjectID} = require('mongodb');

// Local imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// Set up express app
var app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(bodyParser.json());

// Configure routes
app.post('/todos', (req, res) => {	
	// console.log(req.body);
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}).catch((e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos})
	}).catch((e) => {
		res.status(400).send(e);
	});
});

// GET /todos/1234324
app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	// Valid id using isValid
	if (!ObjectID.isValid(id)) {
		return res.status(404).send(); // send back an empty body with 404 status
	}

	Todo.findById(id).then((todo) => {
		if (!todo) {
			return res.status(404).send();
		}

		res.send({todo});
	}).catch((e) => {
		res.status(400).send();
	});
});

app.delete('/todos/:id', (req, res) => {
	var id = req.params.id;

	// Valid id using isValid
	if (!ObjectID.isValid(id)) {
		return res.status(404).send(); // send back an empty body with 404 status
	}

	Todo.findByIdAndRemove(id).then((todo) => {
		if (!todo) {
			return res.status(404).send();
		}

		res.send({todo});
	}).catch((e) => {
		res.status(400).send();
	});
});

app.listen(port, () => {
	console.log(`Started up at port ${port}`);
});

module.exports = {app}; // export app to be used in test














/*########################################### Ver 1 ####################################################################
// var mongoose = require('mongoose');
// 
// /** DATABASE CONFIGURATION */
// // tell mongoose which promise lib to be used
// mongoose.Promise = global.Promise;
// // connect to local mongoDB
// mongoose.connect('mongodb://localhost:27017/TodoApp');



/** MODELS */
// var Todo = mongoose.model('Todo', {
//     text: {
//     	type: String,
//     	required: true,
//     	minlength: 1,
//     	trim: true
//     },
//     completed: {
//     	type: Boolean,
//     	default: false
//     },
//     completedAt: {
//     	type: Number,
//     	default: null
//     }
// });

// var User = mongoose.model('User', {
// 	email: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 		minlength: 1
// 	}
// });


// var otherTodo = new Todo({
// 	text: 'Something to do' // although its type is string number, boolean will be converted to string. type casting exists inside mongoose
// });

// otherTodo.save().then((doc) => {
// 	console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
// 	console.log('Unable to save');
// });

// var user = new User({
// 	email: 'jone.doe@example.com'
// });
// user.save().then((doc) => {
// 	console.log('User saved', doc);
// 	// console.log(JSON.stringify(doc, undefined, 2));
// }).catch((err) => {
// 	console.log('Unable to save');
// });
