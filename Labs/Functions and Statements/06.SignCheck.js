function signCheck(num1, num2, num3) {
  const sign = Math.sign(num1) * Math.sign(num2) * Math.sign(num3);
  if (sign === 1) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}
signCheck(-6, -12, 14);
signCheck(5, 12, -15);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);
