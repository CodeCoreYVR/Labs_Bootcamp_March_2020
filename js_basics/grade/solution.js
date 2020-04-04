// $ node grade.js 22
// F
// $ node grade.js 77
// B

const args = process.argv.slice(2);
const grade = parseInt(args[0]);
// const grade = process.argv[2];
// function test() {
// 	if (grade >= 0 && grade < 50) {
// 		console.log('F');
// 	} else if (grade >= 50 && grade < 60) {
// 		console.log('D');
// 	} else if (grade >= 60 && grade < 70) {
// 		console.log('C');
// 	} else if (grade >= 70 && grade < 80) {
// 		console.log('B');
// 	} else if (grade >= 80 && grade <= 100) {
// 		console.log('A');
// 	} else {
// 		console.log('Invalid grade');
// 	}
// } 

function test() {
	switch(true) {
		case (grade >= 0 && grade < 50):
			console.log('F');
			break;
		case (grade >= 50 && grade < 60):
			console.log('D');
			break;
		case (grade >= 60 && grade < 70):
			console.log('C');
			break;
		case (grade >= 70 && grade < 80):
			console.log('B');
			break;
		case (grade >= 80 && grade <= 100):
			console.log('A');
			break;
		default: 
			console.log('Invalid grade');
			break;
	}
}

console.time("switch");
for(let i = 0; i<1000000; i++) {
	test();
}
console.timeEnd("switch");

// switch(letterGrade) {
// 	case "A": console.log("Good job! You nailed it!");
// 	case "B": console.log()
// }
// switch(true) {
// 	case grade >= 50 && grade < 60: console.log("Good job! You nailed it!");
// 	case "B": console.log()
// }

/* 
	Another solution

// This solution uses a switch statement: 
// https://www.digitalocean.com/community/tutorials/how-to-use-the-switch-statement-in-javascript
// This solution uses a lot of discrete values so that it can represent B-, B,
// B+, etc but the values you choose are not the most important in terms of
// understanding/completing this exercise.
// you could have chosen to do only whole letter grades (no +/-) and it would
// be equally as valid and acceptable
switch (true) {
	case grade >= 0 && grade < 50:
		console.log('F');
		break;
	case grade >= 50 && grade < 55:
		console.log('D');
		break;
	case grade >= 55 && grade < 60:
		console.log('C-');
		break;
	case grade >= 60 && grade < 64:
		console.log('C');
		break;
	case grade >= 64 && grade < 68:
		console.log('C+');
		break;
	case grade >= 68 && grade < 72:
		console.log('B-');
		break;
	case grade >= 72 && grade < 76:
		console.log('B');
		break;
	case grade >= 76 && grade < 80:
		console.log('B+');
		break;
	case grade >= 80 && grade < 85:
		console.log('A-');
		break;
	case grade >= 85 && grade < 90:
		console.log('A');
		break;
	case grade >= 90 && grade <= 100:
		console.log('A+');
		break;
	default:
		console.log('Invalid grade');
}
*/


