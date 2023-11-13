function toggle() {
  const content = document.querySelector("#extra");
  const buttonLink = document.querySelector("span.button");

  if (content.style.display !== "block") {
    content.style.display = "block";
    buttonLink.textContent = "Less";
  } else {
    content.style.display = "none";
    buttonLink.textContent = "More";
  }
}
