function solve(number1, number2, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
    case "%":
      result = number1 % number2;
      break;
    case "**":
      result = number1 ** number2;
      break;
  }
  console.log(result);
}
solve(3, 5, "%");
solve(5, 6, "+");
