let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  return array.map(item => item.length).filter(length => length % 2 === 1);
}

console.log(oddLengths(arr)); // => [1, 5, 3]