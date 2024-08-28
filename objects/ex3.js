let myArray = {
  0: 'hey',
  1: 'hi',
  2: 'yo',
  3: 'howdy',
};

myArray.length = Object.keys(myArray).length;

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}