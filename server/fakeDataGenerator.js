
const faker = require('faker');
const fs = require('fs');

(function fakeDataGenerator() {
	var db = [];

	for (var i = 1; i <= 500; i++) {
	  db.push({
		id: i,
		name: faker.name.findName(),
		department: faker.commerce.department(),
		district: faker.address.city(),
		age: Math.ceil(Math.random()*70)
	  });
	}
	const data = JSON.stringify(db);
	fs.writeFile('./server/data/workers.json', data, function(err){
		if (err) {
			console.log('Error writing file', err)
		} else {
			console.log('Successfully wrote file')
		}
	});
	return;
})();