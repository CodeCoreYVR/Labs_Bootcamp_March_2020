const fs = require('fs');

function writeFile(filename, contents) {
	return new Promise((resolve, reject) => {
		fs.writeFile(filename, contents, err => {
			if (err) reject(err);
			resolve();
		});
	});
}

// fs.writeFile('someFileName', 'Some content', err => {
// 	if (err) throw err;
// 	fs.readFile('someFileName');
// });

writeFile('file.txt', 'The contents of my file')
	.then(function() {
		console.log('File write complete!');
	})
	.catch(function(error) {
		console.error(error);
	});

function errorThrower() {
	throw new Error('This is an error');
}

try {
	console.log('start');
	errorThrower();
	console.log('end');
} catch (error) {
	console.error(error);
}
