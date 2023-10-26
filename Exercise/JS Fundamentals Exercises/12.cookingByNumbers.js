"use strict";
function cookNumber(number, ...operators) {
  let sum = Number(number);
  for (let index = 0; index < operators.length; index++) {
    const operator = operators[index];

    switch (operator) {
      case "chop":
        sum /= 2;
        break;
      case "dice":
        sum = Math.sqrt(sum);
        break;
      case "spice":
        sum += 1;
        break;
      case "bake":
        sum *= 3;
        break;
      case "fillet":
        sum -= sum * 0.2;
        break;
    }
    console.log(sum);
  }
}
cookNumber("32", "chop", "chop", "chop", "chop", "chop");
cookNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
