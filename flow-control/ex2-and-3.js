function evenOrOdd(num) {
  if (num !== parseInt(num)) {
    console.log('Must be an integer');
    return;
  } else {
    return result = num % 2 ? 'odd' : 'even';
  }
}

console.log(evenOrOdd(19.5));