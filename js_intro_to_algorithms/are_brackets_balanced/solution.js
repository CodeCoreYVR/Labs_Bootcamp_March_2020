const log = console.log;

const OPEN = 1;

function areBalanced(str) {
  let stack = [];

  for (let char of str) {
    if (char === '(') {
      stack.push(OPEN);
    } else if (char === ')') {
      if (stack.pop() === undefined) return false;
    }
  }

  return stack.length === 0;
}

log('Output:');
let testCases = [
  '(1 + (2 * 8) ** (3 + 4))',
  '(4 + 4 + (6 * 9)',
  'function rob (arg) { return (arg }',
  'hello )',
  ')(',
  '(...args) => Math.max.bind(null)(...args)',
];

for (let case_ of testCases) {
  log(`'${case_}' is balanced?`, areBalanced(case_));
}
