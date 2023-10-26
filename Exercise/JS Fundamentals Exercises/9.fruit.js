function solve (type, weightInGrams, money){
    const weightInKg = weightInGrams/1000;
    const price = money * weightInKg;
    console.log(`I need $${price.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`);
}
