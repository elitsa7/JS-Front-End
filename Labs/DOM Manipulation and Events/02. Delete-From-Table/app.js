function deleteByEmail() {
  const input = document.querySelector("label input").value;
  const tableRows = Array.from(document.querySelectorAll("tbody tr"));
  let emailFound = false;

  tableRows.forEach((row) => {
    const emailCell = row.querySelector("td:nth-child(2)");
    if (emailCell.textContent === input) {
      row.remove();
      emailFound = true;
      return;
    }
  });

  const resultMessage = document.getElementById("result");
  resultMessage.textContent = emailFound ? "Deleted." : "Not found.";
}
