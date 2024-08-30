function calculateBMI(heightInCM, weightInKilograms) {
  return (weightInKilograms / (heightInCM / 100) ** 2).toFixed(2);
}

console.log(calculateBMI(180, 80)); // "24.69"