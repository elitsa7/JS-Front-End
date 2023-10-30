function replaceWordsWithTemplates(wordsInput, sentence) {
  const words = wordsInput.split(", ");
  const templates = sentence.split(" ");

  const replacedTemplates = templates.map((template) => {
    if (template.includes("*")) {
      const word = words.find((w) => w.length === template.length);
      return word || template;
    }
    return template;
  });
  console.log(replacedTemplates.join(" "));
}
replaceWordsWithTemplates(
  "great",
  "softuni is ***** place for learning new programming languages"
);
replaceWordsWithTemplates(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
