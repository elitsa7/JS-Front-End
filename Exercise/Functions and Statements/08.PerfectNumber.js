function isPerfectNumber(number) {
  let properDivisors = [];
  for (let index = 1; index < number; index++) {
    if (number % index === 0) {
      properDivisors.push(index);
    }
  }
  //   let sum = 0;
  //   for (let divisor of properDivisors) {
  //     sum += divisor;
  //   }
  //   if (sum === number) {
  //     console.log("We have a perfect number!");
  //   }
  if (properDivisors.reduce((sum, divisor) => sum + divisor, 0) === number) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
isPerfectNumber(28);
