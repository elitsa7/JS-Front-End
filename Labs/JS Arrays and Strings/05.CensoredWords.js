function replaceWordWithStars(text, word) {
  let censored = text;

  while (censored.includes(word)) {
    censored = censored.replace(word, "*".repeat(word.length));
  }
  console.log(censored);
}
// function replaceWordWithStars(text, word) {
//   const stars = "*".repeat(word.length);
//   const replacedText = text.replace(new RegExp(word, "g"), stars);
//   console.log(replacedText);
// }

replaceWordWithStars("A small sentence with some words", "small");
replaceWordWithStars("Find the hidden word", "hidden");
