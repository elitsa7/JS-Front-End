function customSortArray(arr) {
  // Sort the input array in ascending order
  arr.sort((a, b) => a - b);

  const n = arr.length;
  const result = new Array(n);

  let smallerIndex = 0;
  let largerIndex = n - 1;

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      result[i] = arr[smallerIndex];
      smallerIndex++;
    } else {
      result[i] = arr[largerIndex];
      largerIndex--;
    }
  }

  return result;
}
