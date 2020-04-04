/*
  inputs: an array called `numsArray`, length of at least 1
  outputs: a single number, the maximum number in the array
*/

// Interative version
/*
  NOTE: this only works with arrays of size 1 or larger.
  maximumIterative is a function
   input: an array of numbers called `numsArray`, length of at least 1
   output: a single number (max number of the input array)
*/
const maximumIterative = function(numsArray) {
  let currMax = numsArray[0];
  for (let num of numsArray) {
    if (num > currMax) {
      currMax = num;
    }
  }
  return currMax;
};

// Recursive version
/*
  NOTE: this only works with arrays of size 1 or larger.
  maximumRecursive is a function
   input: an array of numbers called `numsArray`, length of at least 1
   output: a single number (max number of the input array)
*/
function maximumRecursive(numsArray) {
  // const maximumRecursive = function(numsArray) {
  if (numsArray.length === 1) return numsArray[0];
  let num = numsArray[0];
  let maxRest = maximumRecursive(numsArray.slice(1));
  if (num > maxRest) {
    return num;
  } else {
    return maxRest;
  }
  // return num > maxRest ? num : maxRest;
}

// Same function as above but with comments
const maximumRecursiveWithComments = function(numsArray) {
  if (numsArray.length === 1) return numsArray[0];
  let num = numsArray[0];
  let maxRest = maximumRecursiveWithComments(numsArray.slice(1));
  /*
    The code below uses a `ternary operator`
    "But Max, what does the ternary operator do?" one may ask...
    One can consider a `ternary operator` as a one-line if-statement that
    returns the result of executing either `expr1` or `expr2`

      condition ? expr1 : expr2

    the `condition` works the same way as an if statement.
    if the `condition` is true,
    then `expr1` is executed and returned
    otherwise `expr2` is executed and returned
  */
  return num > maxRest ? num : maxRest;
  /*
    therefore, code immediately above is equivalent to the following:

    if (num > maxRest) {
      return num;
    } else {
      return maxRest;
    }
  */
};

/** Benchmarking **/

// Create a large array
const testArray = [];
const arraySize = 10000;
for (let el = 0; el < arraySize; el++) {
  testArray.push(Math.ceil(Math.random() * arraySize));
}

console.time('Interative');
let max = maximumIterative(testArray);
console.timeEnd('Interative');
console.log('max is', max);

console.time('Recursive');
max = maximumRecursive(testArray);
console.timeEnd('Recursive');
console.log('max is', max);
