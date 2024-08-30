let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

// groceryList.forEach((item, index) => {
//   console.log(item);
//   groceryList = groceryList.slice(index);
// });

let length = groceryList.length;
for (let i = 0; i < length; i++) {
  console.log(groceryList.shift());
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); // []