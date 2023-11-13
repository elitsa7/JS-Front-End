function generateReport() {
  const inputs = Array.from(document.querySelectorAll("input"));
  const tableRows = Array.from(document.querySelectorAll("tr")).slice(1);
  let checkedCols = inputs
    .map((input, index) => (input.checked ? index : -1))
    .filter((index) => index !== -1);
  const resultArr = tableRows.map((row) => {
    const object = {};
    checkedCols.forEach((index) => {
      const name = inputs[index].name;
      object[name] = row.children[index].textContent;
    });
    return object;
  });

  document.getElementById("output").value = JSON.stringify(resultArr);
}
