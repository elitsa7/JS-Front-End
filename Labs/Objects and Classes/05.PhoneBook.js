function processPhonebook(input) {
  const phonebook = {};

  for (const entry of input) {
    const [name, number] = entry.split(" ");
    phonebook[name] = number;
  }

  for (const name in phonebook) {
    console.log(`${name} -> ${phonebook[name]}`);
  }
}

processPhonebook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);

processPhonebook([
  "George 0552554",
  "Peter 087587",
  "George 0453112",
  "Bill 0845344",
]);
