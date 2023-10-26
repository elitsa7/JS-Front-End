function printAndSum (number1, number2){
    let sum = 0;
    let result = [];
    for (let i = number1; i <= number2; i++) {
        result.push(i);
        sum += i;
    }
    console.log(result.join(" "));
    console.log(`Sum: ${sum}`);
}
