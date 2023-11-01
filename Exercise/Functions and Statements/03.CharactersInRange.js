function printCharactersBetween(char1, char2) {
  const startCharCode = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
  const endCharCode = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
  let result = [];
  for (let charCode = startCharCode + 1; charCode < endCharCode; charCode++) {
    const char = String.fromCharCode(charCode);
    result.push(char);
  }
  console.log(result.join(" "));
}
printCharactersBetween("a", "d");
printCharactersBetween("#", ":");
printCharactersBetween("C", "#");
