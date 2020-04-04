/*
  NOTE: even though we had to write more code, and do more work to write the
  binary search function, when compared to linear search, on average, it finds
  elements about 100 times faster (and sometimes even faster than that!!!)
*/
function binarySearch(num, arr) {
  if (arr.length === 0) return -1;
  let low = 0;
  let hi = arr.length - 1;
  let mid = Math.floor(arr.length / 2);
  while (low <= hi) {
    if (arr[mid] === num) return mid;
    if (arr[mid] > num) {
      hi = mid - 1;
      mid = Math.floor((low + hi) / 2);
    } else {
      low = mid + 1;
      mid = Math.floor((low + hi) / 2);
    }
  }
  return -1;
}

function linearSearch(num, arr) {
  for (let i in arr) {
    if (arr[i] === num) return i;
  }
  return -1;
}

let num = 10000000;
let arr = [...Array(num).keys()];
/*
	Above is the shortest way of creating an array populated with values
	from 0 to `num`.
	It is a short form of the following:

			let arr = [];
			for (let i = 0; i < num; i++) {
				arr.push(i);
			}

  This uses some newer javascript syntax. Mainly, the spread operator: `...`
  We will be going on over the spread operator later in the bootcamp, but if you
  wanted to learn more about it now, look here:

      https://codeburst.io/javascript-the-spread-operator-a867a71668ca

*/

console.time(`binary ${num}`);
binarySearch(num, arr);
console.timeEnd(`binary ${num}`);

console.time(`linear ${num}`);
linearSearch(num, arr);
console.timeEnd(`linear ${num}`);
