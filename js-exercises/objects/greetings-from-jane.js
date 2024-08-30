let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
  greet: (name) => {
    return `Hey, ${name}!`;
  }
};

console.log(jane.greet('Bobby')); // Hey, Bobby!