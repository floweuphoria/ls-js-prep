let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(words, regex) {
  return words.filter(str => {
    return regex.test(str);
  })
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']