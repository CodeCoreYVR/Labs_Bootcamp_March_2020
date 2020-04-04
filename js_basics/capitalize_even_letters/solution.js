const args = process.argv.slice(2);

const word = args[0].toLowerCase(); // ensures we start with a word that is lowercase
let result = '';

for (let i = 0; i < word.length; i++) {
	if (i % 2 === 0) {
		// if it is an even letter (even from the code perspective,
		// remember js/computers start counting at 0 not 1)
		// Then we will keep it the same, which is lower case
		result += word[i];
	} else {
		// Otherwise, we will make the letter upper case
		result += word[i].toUpperCase();
	}
}

console.log(result);

// STRETCH

/*
const args = process.argv.slice(2);
const sentence = args.join(' '); // this joins our strings into a sentence
const words = sentence.toLowerCase(); // ensures we start with a word that is lowercase
let result = '';

for (let i = 0; i < words.length; i++) {
	if (i % 2 === 0) {
		// if it is an even letter (even from the code perspective,
		// remember js/computers start counting at 0 not 1)
		// Then we will keep it the same, which is lower case
		result += words[i];
	} else {
		// Otherwise, we will make the letter upper case
		result += words[i].toUpperCase();
	}
}

console.log(result);
*/

/* 

	Another solution


// Get the word from the arguments
// we are using `let` here because we will be reassigning the `word` variable later

let word = args[0];

// take our word, and change all letters to be in lower case
word = word.toLowerCase();

// the `split` string method changes the string into an array
// it will split the string into an array by matching against its string argument
// For example:
//    "hello there, everyone".split(' ')
// will return
//    ['hello', 'there,', 'everyone']

word = word.split('');

// in our example, `word.split('')` will give each characer within the word-string
// its own index
// For example:
//    "hi max".split('')
// will return
//    ['h', 'i', ' ', 'm', 'a', 'x']

// Next, we loop over everycharacter in the word

for (let i = 0; i < word.length; i++) {
	
	// if the index of that character is even, we will change it to uppercase
	if (i % 2 !== 0) {
		word[i] = word[i].toUpperCase();
	}

}

// the array method `join` will join an array together into a string
// It will use the string sequence that it was passed as an argument as
// the string to "join" on
// For example:
//    ['h', 'i', ' ', 'm', 'a', 'x'].join('-!-')
// will return
//    'h-!-i-!- -!-m-!-a-!-x'

word = word.join('');

// using the '' (empty string) as the joining string will put the letters back together
// For example:
//    ['h', 'i', ' ', 'm', 'a', 'x'].join('')
// will return
//    'hi max'

console.log(word);

*/
