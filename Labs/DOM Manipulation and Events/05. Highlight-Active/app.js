function focused() {
  const inputs = Array.from(document.querySelectorAll("input"));
  inputs.forEach((input) => {
    input.addEventListener("focus", (element) => {
      element.target.parentElement.className = "focused";
      input.addEventListener("blur", (element) => {
        element.target.parentElement.className = "blur";
      });
    });
  });
}
