let array = [3, 5, 7];

function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, currentValue) => {
    return currentValue * currentValue + accumulator
  }, 0)
}

console.log(sumOfSquares(array)); // => 83