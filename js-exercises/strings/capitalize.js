function capitalize(sentence) {
  let words = sentence.split(' ');
  let capitalized = words.map((word) => {
    return word[0] = word[0].toUpperCase() + word.slice(1);
  }).join(' ');
  return capitalized;
}

console.log(capitalize('launch school tech & talk'));