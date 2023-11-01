function oddAndEvenSum(number) {
  let numToStr = number.toString();
  let odds = [];
  let evens = [];
  let oddsSum = 0;
  let evensSum = 0;

  for (let index = 0; index < numToStr.length; index++) {
    const digit = parseInt(numToStr[index], 10);
    if (digit % 2 === 0) {
      evens.push(digit);
    } else {
      odds.push(digit);
    }
  }

  for (let index = 0; index < odds.length; index++) {
    oddsSum += odds[index];
  }

  for (let index = 0; index < evens.length; index++) {
    evensSum += evens[index];
  }

  console.log(`Odd sum = ${oddsSum}, Even sum = ${evensSum}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
