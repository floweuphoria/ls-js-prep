let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(strings) {
  return strings.reduce((accumulator, string) => {
    if (string.length % 2 === 1) {
      accumulator.push(string.length);
    }
    return accumulator;
  }, []);
}

console.log(oddLengths(arr)); // => [1, 5, 3]