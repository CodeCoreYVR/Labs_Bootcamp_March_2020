/* Solution to Contrived Math Library */
function add(a, b = 0) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(a) || isNaN(b)) {
				reject('All parameters must be numbers');
			}
			resolve(a + b);
		});
	});
}

function sub(a, b = 0) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(a) || isNaN(b)) {
				reject('All parameters must be numbers');
			}
			resolve(a - b);
		});
	});
}

function mult(a, b = 1) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(a) || isNaN(b)) {
				reject('All parameters must be numbers');
			}
			resolve(a * b);
		});
	});
}

function div(a, b = 1) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(a) || isNaN(b)) {
				reject('All parameters must be numbers');
			}
			resolve(a / b);
		});
	});
}

function pow(a, b = 1) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(a) || isNaN(b)) {
				reject('All parameters must be numbers');
			}
			resolve(Math.pow(a, b));
		});
	});
}

/* Refactored Solution to cut down on code repetition */
function add(a, b = 0) {
	return promiseMath(a, b, a + b);
}

function sub(a, b = 0) {
	return promiseMath(a, b, a - b);
}

function mult(a, b = 1) {
	return promiseMath(a, b, a * b);
}

function div(a, b = 1) {
	return promiseMath(a, b, a / b);
}

function pow(a, b = 1) {
	return promiseMath(a, b, Math.pow(a, b));
}

function promiseMath(a, b, value) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (isNaN(a) || isNaN(b)) {
				reject('All parameters must be numbers');
			}
			resolve(value);
		});
	});
}
