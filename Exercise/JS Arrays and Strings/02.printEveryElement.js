function solve(array, number) {
  const result = [];
  for (let index = 0; index < array.length; index += number) {
    result.push(array[index]);
  }
  return result;
}
console.log(solve(["5", "20", "31", "4", "20"], 2));
