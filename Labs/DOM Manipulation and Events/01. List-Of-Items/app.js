function addItem() {
  const input = document.getElementById("newItemText").value;
  const ul = document.getElementById("items");
  const li = document.createElement("li");
  li.textContent = input;
  ul.appendChild(li);
}
