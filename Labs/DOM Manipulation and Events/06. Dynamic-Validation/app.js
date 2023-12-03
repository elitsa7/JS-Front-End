function validate() {
  const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const inputElement = document.getElementById("email");
  const value = inputElement.value;

  inputElement.addEventListener("change", checkEmail);

  function checkEmail(event) {
    if (reg.test(event.target.value)) {
      event.target.removeAttribute("class");
      return;
    }

    event.target.className = "error";
  }
}
