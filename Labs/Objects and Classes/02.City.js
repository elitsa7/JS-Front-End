function city(info) {
  for (const key in info) {
    console.log(`${key} -> ${info[key]}`);
  }
}
city({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
