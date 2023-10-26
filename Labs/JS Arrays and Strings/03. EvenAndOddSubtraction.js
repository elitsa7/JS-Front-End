function solve(inputArray) {
  //difference between the sum of the even and the sum of the odd numbers
  let evenSum = 0;
  let oddSum = 0;
  for (let index = 0; index < inputArray.length; index++) {
    if (inputArray[index] % 2 === 0) {
        evenSum += inputArray[index];
    }else{
        oddSum += inputArray[index];
    }
  }
  console.log(evenSum - oddSum);
}
solve([2,4,6,8,10]);
