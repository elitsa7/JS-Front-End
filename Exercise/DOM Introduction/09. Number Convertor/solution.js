function solve() {
  // Insert options to menu
  const selectMenu = document.getElementById("selectMenuTo");
  const binaryOption = document.createElement("option");
  binaryOption.value = "binary";
  binaryOption.text = "Binary";

  const hexadecimalOption = document.createElement("option");
  hexadecimalOption.value = "hexadecimal";
  hexadecimalOption.text = "Hexadecimal";

  selectMenu.add(binaryOption);
  selectMenu.add(hexadecimalOption);

  const convertButton = document.querySelector("button");
  convertButton.addEventListener("click", convert);

  function convert() {
    const input = Number(document.getElementById("input").value);

    const selectedOption = selectMenu.options[selectMenu.selectedIndex].value;
    let result;
    if (selectedOption === "binary") {
      result = decimalToBinary(input);
    } else if (selectedOption === "hexadecimal") {
      result = decimalToHexadecimal(input);
    }
    document.getElementById("result").value = result;
  }

  function decimalToBinary(decimalNumber) {
    return (decimalNumber >>> 0).toString(2);
  }

  function decimalToHexadecimal(decimalNumber) {
    return decimalNumber.toString(16).toUpperCase();
  }
}
