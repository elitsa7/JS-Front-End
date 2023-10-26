function spiceMustFlow(startingYield) {
  let extracted = 0;
  let days = 0;

  while (startingYield >= 100) {
    extracted += startingYield - 26;
    startingYield -= 10;
    days++;
  }
  extracted -= 26;
  if (extracted < 0) {
    extracted = 0;
  }
  console.log(days);
  console.log(extracted);
}
// spiceMustFlow(450);
