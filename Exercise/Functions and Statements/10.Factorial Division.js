function calculateAndPrintDivision(num1, num2) {
  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  const fact1 = factorial(num1);
  const fact2 = factorial(num2);
  const divisionResult = (fact1 / fact2).toFixed(2);
  console.log(divisionResult);
}
calculateAndPrintDivision(5, 2);

// function factorial(num1, num2) {
//   let fact1 = 1;
//   if (num1 > 1) {
//     for (let index = num1; index >= 1; index--) {
//       fact1 = fact1 * index;
//     }
//   }
//   let fact2 = 1;
//   if (num2 > 1) {
//     for (let index = num2; index >= 1; index--) {
//       fact2 = fact2 * index;
//     }
//   }
//   console.log((fact1 / fact2).toFixed(2));
// }
// factorial(7, 5);
