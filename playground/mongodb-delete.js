// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // destructure MongoClient, ObjectID properties from mongodb


MongoClient.connect('mongodb://localhost:27017/9digital', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) => {
	// 	console.log(res);
	// });

	// deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
	// 	console.log(res);
	// });

	// findOneAndDelete	
	// db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
	// 	console.log(res);
	// });

	// db.collection('Users').deleteMany({name: 'James Hyun'});
	
	db.collection('Users').findOneAndDelete({
		_id: new ObjectID("5883340f832db80850ca61f0")
	}).then((res) => {
		console.log(JSON.stringify(res, undefined, 2));
	});

	// db.close();
});