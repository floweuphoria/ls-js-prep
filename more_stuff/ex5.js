function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// returns an array of lengths longest words, in reverse order

console.log(doSomething('hello my name is chesterfield'));