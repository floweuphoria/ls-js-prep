function isNotANumber(value) {
  if (typeof value === 'number') {
    if (value + 1 === value + 1) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

console.log(isNotANumber(NaN));
console.log(isNotANumber(214));
console.log(isNotANumber('foo'));