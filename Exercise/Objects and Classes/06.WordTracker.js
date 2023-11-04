function solve(input) {
  const [searchWords, ...words] = input;

  const wordTrack = searchWords.split(" ").reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});

  words.forEach((word) => {
    if (wordTrack.hasOwnProperty(word)) {
      wordTrack[word] += 1;
    }
  });

  const wordCounts = Object.keys(wordTrack).map((word) => ({
    word,
    count: wordTrack[word],
  }));

  wordCounts.sort((a, b) => b.count - a.count);
  
  wordCounts.forEach((wordCount) => {
    console.log(`${wordCount.word} - ${wordCount.count}`);
  });
}
solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
solve([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
