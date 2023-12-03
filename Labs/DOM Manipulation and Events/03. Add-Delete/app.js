function addItem() {
  let list = document.getElementById("items");
  list.addEventListener("click", deleteItem);

  let newItemText = document.getElementById("newItemText").value;
  let newItem = document.createElement("li");
  newItem.innerHTML = `${newItemText} <a href="#">[Delete]</a>`;
  list.appendChild(newItem);
  newItemText.value = "";

  function deleteItem(item) {
    let element = item.target.parentNode;
    element.remove();
  }
}
