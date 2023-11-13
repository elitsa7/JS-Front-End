function solve() {
  function toCamelCase() {
    for (let i = 0; i < words.length; i++) {
      const word =
        i === 0
          ? words[i].toLowerCase()
          : words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      result += word;
    }
  }

  function toPascalCase() {
    for (let i = 0; i < words.length; i++) {
      result +=
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }

  const input = document.getElementById("text").value;
  const caseType = document.getElementById("naming-convention").value;

  if (caseType !== "Camel Case" && caseType !== "Pascal Case") {
    document.getElementById("result").textContent = "Error!";
    return;
  }

  const words = input.split(" ");
  let result = "";
  
  switch (caseType) {
    case "Camel Case":
      toCamelCase();
      break;
    case "Pascal Case":
      toPascalCase();
  }

  document.getElementById("result").textContent = result;
}
