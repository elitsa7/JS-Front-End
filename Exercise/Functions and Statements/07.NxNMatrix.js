function printNxNMatrix(number) {
  for (let i = 1; i <= number; i++) {
    let row = "";
    for (let j = 1; j <= number; j++) {
      row += `${number} `;
    }
    console.log(row);
  }
}
printNxNMatrix(5);
