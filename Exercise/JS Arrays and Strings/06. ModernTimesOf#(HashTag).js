function findHashTag(input) {
  const template = input.split(" ");
  let elements = [];
  for (let index = 0; index < template.length; index++) {
    if (template[index].includes("#") && template[index].length > 1) {
      elements.push(template[index]);
    }
  }
  for (let index = 0; index < elements.length; index++) {
    const withoutHashTag = elements[index].replace("#", "");
    if (/^[a-zA-Z]+$/.test(withoutHashTag)) {
      console.log(withoutHashTag);
    }
  }
}
findHashTag("Nowadays everyone uses # to tag a #special word in #socialMedia");
findHashTag(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
