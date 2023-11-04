function solve(input) {
  const words = input.toLowerCase().split(" ");
  const wordCountMap = new Map();

  for (const word of words) {
    const count = (wordCountMap.get(word) || 0) + 1;
    wordCountMap.set(word, count);
  }

  const oddOccurrences = [...wordCountMap.keys()].filter(
    (word) => wordCountMap.get(word) % 2 !== 0
  );

  console.log(oddOccurrences.join(" "));
}
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
solve("Cake IS SWEET is Soft CAKE sweet Food");
