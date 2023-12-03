function solve() {
  const addButton = Array.from(document.getElementsByClassName("add-product"));
  let textArea = document.querySelector("body > div > textarea");
  let checkOutButton = document.querySelector("body > div > button");

  let totalPrice = 0;
  let listOfItems = [];

  addButton.forEach((button, index) => {
    button.addEventListener("click", () => add(index));
  });

  checkOutButton.addEventListener("click", checkOut);

  function add(index) {
     let name = document.querySelector(
       `body > div > div:nth-child(${index + 2}) > div.product-details > div`
     ).textContent;
    let price = document.querySelector(
      `body > div > div:nth-child(${index + 2}) > div.product-line-price`
    ).textContent;

    if (!listOfItems.includes(name)) {
      listOfItems.push(name);
    }
    let result = `Added ${name} for ${price} to the cart.\n`;
    totalPrice += Number(price);
    textArea.value += result;
  }

  function checkOut() {
    let checkOutOutput = `You bought ${listOfItems.join(
      ", "
    )} for ${totalPrice.toFixed(2)}.`;
    textArea.value += checkOutOutput;
    disableButtons();
  }

  function disableButtons() {
    let buttons = Array.from(
      document.querySelectorAll("button.add-product, button.checkout")
    );
    buttons.forEach((btn) => (btn.disabled = true));
  }
}
