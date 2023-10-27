function countStrings(text, wordInput) {
  let textWords = text.split(" ");
  let count = 0;
  for (let word of textWords) {
    if (word === wordInput) {
      count++;
    }
  }
  console.log(count);
}
countStrings("This is a word and it also is a is sentence", "is");
