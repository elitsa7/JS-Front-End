function sumTable() {
  const prices = Array.from(document.querySelectorAll("td:nth-child(2)"));
  const totalSum = prices.reduce((acc, curr) => {
    return acc + Number(curr.textContent);
  }, 0);

  document.getElementById("sum").textContent = totalSum;
}
