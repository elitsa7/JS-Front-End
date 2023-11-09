function extract(content) {
  const targetElement = document.getElementById(content);
  const textContent = targetElement.textContent || targetElement.innerText;
  const regex = /(([^)]+))/g;
  const matches = [];
  let match = "";
  while ((match = regex.exec(textContent)) !== null) {
    matches.push(match[1]);
  }
  return matches.join("; ");
}
console.log(extract("content"));
