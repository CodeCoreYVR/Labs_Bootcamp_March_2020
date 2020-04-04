const args = process.argv.slice(2);
const a = parseFloat(args[0]);
const b = parseFloat(args[1]);
const c = parseFloat(args[2]);


 // 2, 5, 5
let largest = a;

if (b > largest) {
	largest = b;
}

if (c > largest) {
	largest = c;
}

console.log(`The largest number is ${largest}`);

/* 

// Another Solution

if (a >= b && a >= c) {
	// `a` is the largest number
	printLargest(a);
} else if (b >= a && b >= c) {
	// `b` is the largest number
	printLargest(b);
} else {
	// either c is the largest, or they are all of the same size,
	// in which case, all of the three are technically the largest
	printLargest(c);
}

// Helper function to help print out which number is the largest
function printLargest(num) {
	console.log(`The largest number is ${num}`);
}

*/
