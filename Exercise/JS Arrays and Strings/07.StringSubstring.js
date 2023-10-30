function findWord(word, text) {
  const lowerCaseWord = word.toLowerCase(); 
  const lowerCaseText = text.toLowerCase();
  const wordsInText = lowerCaseText.split(/\s+/); 

  for (const wordInText of wordsInText) {
    if (wordInText === lowerCaseWord) {
      console.log(word); // Print the word
      return;
    }
  }

  console.log(`${word} not found!`);
}
findWord("javascript", "JavaScript is the best programming language");
findWord("python", "JavaScript is the best programming language");