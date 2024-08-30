let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// vocabulary
//   .join('')
//   .split(',')
//   .forEach(word => {
//     console.log(word);
//   })
vocabulary.forEach(array => {
  array.forEach(word => console.log(word));
});

// Expected output:
// happy
// cheerful
// merry
// etc...