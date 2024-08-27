function capitalize(str) {
  return str.length > 10 ? str.toUpperCase() : str;
}

console.log(capitalize('hello there world'));
console.log(capitalize('mike'));