function search() {
  const towns = Array.from(document.querySelectorAll("#towns li"));
  let result = document.getElementById("result");
  let input = document.getElementById("searchText").value;
  let countMatch = 0;

  towns.forEach((element) => {
    element.style.textDecoration = "";
    element.style.fontWeight = "";
  });

  for (let index = 0; index < towns.length; index++) {
    const element = towns[index];
    const townText = element.textContent;

    if (townText.includes(input)) {
      element.style.textDecoration = "underline";
      element.style.fontWeight = "bold";
      countMatch++;
    }
  }

  result.textContent = `${countMatch} matches found`;
}
