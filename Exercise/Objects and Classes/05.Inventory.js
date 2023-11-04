function solve(input) {
  const inventory = input.reduce((acc, curr) => {
    const [name, level, items] = curr.split(" / ");
    const hero = {
      name,
      level: Number(level),
      items: items.split(", "),
    };
    acc.push(hero);
    return acc;
  }, []);
  inventory.sort((a, b) => a.level - b.level);
  for (const hero of inventory) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.join(", ")}`);
  }
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
