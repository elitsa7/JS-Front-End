function solve (number){
    const digitsToString = number.toString();
    let sum = 0;
    for (let i = 0; i < digitsToString.length; i++) {
        sum += Number(digitsToString[i]);
    }
    console.log(sum);
}
