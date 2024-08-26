let readlineSync = require('readline-sync');
let age = Number(readlineSync.question('How old are you?\n'));

console.log(`You are ${age} years old.`);
console.log(`In ${10} years you will be ${age + 10} years old.`);