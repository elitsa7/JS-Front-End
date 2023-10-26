function solve(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  //every second game -> helmet
  //every third game -> sword
  //if in one game broke helmet and sword -> shield
  //every second time shield broke -> armor repair

  let shieldCount = 0;
  let needMoney = 0;
  for (let index = 1; index <= lostFightsCount; index++) {
    if (index % 2 === 0) {
      needMoney += helmetPrice;
    }
    if (index % 3 === 0) {
      needMoney += swordPrice;
    }
    if (index % 2 === 0 && index % 3 === 0) {
      needMoney += shieldPrice;
      shieldCount++;
    }
    if (shieldCount % 2 === 0 && shieldCount > 0) {
      needMoney += armorPrice;
      shieldCount = 0;
    }
  }
  console.log(`Gladiator expenses: ${needMoney.toFixed(2)} aureus`);
}
// solve(23, 12.5, 21.5, 40, 200);
