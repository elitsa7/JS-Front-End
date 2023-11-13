function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const search = document.getElementById("searchField").value;
    const cells = Array.from(document.querySelectorAll("tbody td"));

    cells.forEach((cell) => {
      cell.parentElement.classList.remove("select");
    });
    cells.forEach((cell) => {
      if (cell.textContent.includes(search)) {
        cell.parentElement.classList.add("select");
      }
    });
  }
}
