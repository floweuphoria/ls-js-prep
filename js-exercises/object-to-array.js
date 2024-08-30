let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let arr = Object.entries(person);

// console.log(arr);

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

console.log(Object.fromEntries(nestedArray));

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }