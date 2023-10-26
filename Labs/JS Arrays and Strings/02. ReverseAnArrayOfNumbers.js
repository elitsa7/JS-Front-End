function reverseArray(n, inputArr) {
  if (n > inputArr.length) {
    return;
  }
  let array = [];
  for (let index = n - 1; index >= 0; index--) {
    array.push(inputArr[index]);
  }
  console.log(array.join(" "));
}
reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
