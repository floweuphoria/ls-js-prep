let readlineSync = require('readline-sync');
let first = readlineSync.question('What is your first name? ');
let last = readlineSync.question('What is your last name? ');
console.log(`Hello, ${first} ${last}!`);