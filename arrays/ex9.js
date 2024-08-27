let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

// using reduce

// function contains3(array) {
//   return array.reduce((bool, currentNumber) => {
//     return bool || (currentNumber === 3);
//   }, false)
// }

// console.log(contains3(numbers1));
// console.log(contains3(numbers2));
// console.log(contains3(numbers3));

console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));