function solve() {
  const input = Array.from(document.getElementById("input").value.split("."));
  //Remove last element, because it is empty
  input.pop();
  const outputContainer = document.getElementById("output");
  for (let i = 0; i < input.length; i += 3) {
    const sentences = input.slice(i, i + 3).join(". ");
    const lastChar = sentences.slice(-1);
    const paragraph = document.createElement("p");

    if (input.length > 1) {
      paragraph.innerHTML = `<p>${sentences}${lastChar !== "." ? "." : ""}</p>`;
    } else {
      paragraph.textContent = sentences + ".";
    }
    outputContainer.appendChild(paragraph);
  }
}
