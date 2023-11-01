function adressBook(inputBook) {
  const adressBook = {};
  for (const info of inputBook) {
    const [name, adress] = info.split(":");
    adressBook[name] = adress;
  }
  const sorted = Object.keys(adressBook).sort();

  for (const name of sorted) {
    console.log(`${name} -> ${adressBook[name]}`);
  }
}
adressBook([
    "Bob:Huxley Rd",
    "John:Milwaukee Crossing",
    "Peter:Fordem Ave",
    "Bob:Redwing Ave",
    "George:Mesta Crossing",
    "Ted:Gateway Way",
    "Bill:Gateway Way",
    "John:Grover Rd",
    "Peter:Huxley Rd",
    "Jeff:Gateway Way",
    "Jeff:Huxley Rd",
]);
