function repeat(num, string) {
  let repeatedString = '';
  for (let i = 0; i < num; i += 1) {
    repeatedString += string;
  }
  return repeatedString;
}

console.log(repeat(3, 'ha'));