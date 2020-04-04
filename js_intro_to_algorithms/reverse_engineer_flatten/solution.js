const log = console.log;

const flat = [[1], [1, 2], [4, 5, 6, [7, 8]]];
log('Nested Array');
log(flat);

{
	log('100% Iterative');

	const flatten = function(arr) {
		let out = Array.from(arr); // this clones the array
		for (let i = 0; out[i] !== void 0; i += 1) {
			//void 0 === undefined
			if (Array.isArray(out[i])) {
				out = out
					.slice(0, i)
					.concat(out[i])
					.concat(out.slice(i + 1));
			}
		}

		return out;
	};

	const flat = [[1], [1, 2], [4, 5, 6, [7, 8]]];
	log(flatten(flat));
}

{
	log('Iter-Recursive'); // It's a mutt 🐶

	const flatten = function(arr) {
		let out = [];
		for (let val of arr) {
			Array.isArray(val) ? out.push(...flatten(val)) : out.push(val);
		}
		return out;
	};

	const flat = [[1], [1, 2], [4, 5, 6, [7, 8]]];
	log(flatten(flat));
}

{
	log('100% Recursive');

	const flatten = function([first, ...rest]) {
		return [
			...(Array.isArray(first) ? flatten(first) : [first]),
			...(rest.length === 0 ? [] : flatten(rest))
		];
	};

	const flat = [[1], [1, 2], [4, 5, 6, [7, 8]]];
	log(flatten(flat));
}

//--------------- More notes / ways of approaching this problem ---------------

// let's write some simple expected results (TESTS!!!)

// flatten([]) -> []
// flatten([1]) -> [1]
// flatten([[]]) -> []
// flatten([1,[2]]) -> [1,2]
// flatten([[1],2]) -> [1,2]

// from this, it appers that there are two main cases:
// CASE 1:
//    when the first element is an array
// CASE 2:
//    when the first element is NOT an array

function flatten(arr) {
	// if array is empty, return the empty array
	if (arr.length === 0) return arr;
	// check first element of array, is it, also, an array?
	if (Array.isArray(arr[0])) {
		// It IS an array!
		// well, since the first element is an array, flatten that array!
		// And save it!
		let flattenedFirst = flatten(arr[0]); // <--- `first` is a flattened array since
		//       flatten returns an array
		// flatten the rest of the array!
		let flattenedRest = flatten(arr.slice(1));
		// glue them together! (using concat, in this case)
		return flattenedFirst.concat(flattenedRest);
	} else {
		// It IS NOT an array!
		// save the first element
		let first = arr[0];
		// flatten the rest of the array!
		let flattenedRest = flatten(arr.slice(1));
		// glue them together! (using concat, in this case)
		return [first].concat(flattenedRest);
	}
}

// Shorter version (less lines of code, same exact functionality) of the above
// function
function flatten2(arr) {
	if (arr.length === 0) return arr;
	if (Array.isArray(arr[0])) {
		return flatten(arr[0]).concat(flatten(arr.slice(1)));
	}
	return [arr[0]].concat(flatten(arr.slice(1)));
}
