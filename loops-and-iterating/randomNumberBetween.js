function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(3, 5);
  tries += 1;
} while (result <= 2);

// console.log(randomNumberBetween(1, 6));

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');