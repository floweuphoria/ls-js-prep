function removeLastChar(str) {
  return str.slice(0, -1);
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'