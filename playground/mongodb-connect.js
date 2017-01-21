// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // destructure MongoClient, ObjectID properties from mongodb

// var obj = new ObjectID(); // create a _id

// var user = {name: 'James', age: 25}
// var {name}  = user; // destructure name property frm user object

MongoClient.connect('mongodb://localhost:27017/9digital', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false

	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// Insert new doc into Users (name, age, location)
	// db.collection('Users').insertOne({
	// 	name: 'James Hyun',
	// 	age: 29,
	// 	location: 'Sydney'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert user', err);
	// 	}

	// 	console.log(result.ops[0]._id.getTimestamp());
	// });
	
	// db.collection('Todos').find({
	// 	_id: new ObjectID('5883229c2cd5a70d5c229378') //_id:'5883229c2cd5a70d5c229378' this doesn't work because _id is obj not string. intead need to use ObjectID
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });

	db.collection('Users').find({name: 'James Hyun'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err)
	})

	// db.close();
});