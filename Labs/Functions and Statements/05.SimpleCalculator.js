function simpleCalculator(num1, num2, operator) {
  const calculate = {
    multiply: (num1, num2) => num1 * num2,
    divide: (num1, num2) => num1 / num2,
    subtract: (num1, num2) => num1 - num2,
    add: (num1, num2) => num1 + num2,
  };

  return calculate[operator](num1, num2);
}
// const calculate = {
//   multiply: (num1, num2) => num1 * num2,
//   divide: (num1, num2) => num1 / num2,
//   subtract: (num1, num2) => num1 - num2,
//   add: (num1, num2) => num1 + num2,
// };
// const simpleCalculator = (num1, num2, operator) =>
//   calculate[operator](num1, num2);

// const result = simpleCalculator(5, 5, "add");
// console.log(result);
