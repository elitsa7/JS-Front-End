function calculate(product, quantity) {
  const prices = {
    coffee: 1.5,
    coke: 1.4,
    water: 1,
    snacks: 2,
  };
  console.log((prices[product] * quantity).toFixed(2));
}
calculate("water", 4);
