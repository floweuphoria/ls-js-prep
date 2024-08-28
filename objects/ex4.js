let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let UpperKeys = Object.keys(obj).map(key => key.toUpperCase());

console.log(UpperKeys);
console.log(obj);