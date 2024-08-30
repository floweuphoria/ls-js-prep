let scores = [96, 47, 113, 89, 100, 102];

// let scoresAbove100 = scores.filter(score => score >= 100)
//   .reduce((sum, score) => {
//     return sum + score;
//   }, 0);

let scoresAbove100 = scores.reduce((sum, score) => {
  console.log({ sum, score });
  return score >= 100 ? sum + score : sum;
}, 0)

console.log(scoresAbove100)