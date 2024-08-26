function multiply() {
  let first = getNumber("Enter the first number: ");
  let second = getNumber("Enter the second number: ");
  console.log(`${first} * ${second} = ${first * second}`)
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return Number(readlineSync.question(prompt));
}

multiply();