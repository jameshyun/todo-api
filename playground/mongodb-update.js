// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // destructure MongoClient, ObjectID properties from mongodb


MongoClient.connect('mongodb://localhost:27017/9digital', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5883411c0dbaf993ec7d51a4')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((res) => {
	// 	console.log(res);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('58832423f9582d0148b2f297')
	}, {
		$set: {
			name: 'James'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((res) => {
		console.log(res);
	});

	// db.close();
});