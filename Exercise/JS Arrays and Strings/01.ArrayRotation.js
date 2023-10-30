function solve(array, number) {
  for (let index = 0; index < number; index++) {
    const element = array.shift();
    array.push(element);
  }
  console.log(array.join(" "));
}

solve([51, 47, 32, 61, 21], 2);
solve([2, 4, 15, 31], 5);
