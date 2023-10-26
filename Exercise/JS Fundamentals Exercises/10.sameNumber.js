"use strict";
function printIfSameNumber (number){
    const digitsString = number.toString();
    let flag = true;
    let sum = Number(digitsString[0]);
    for (let index = 1; index < digitsString.length; index++) { 
        sum += Number(digitsString[index])
        if(digitsString[index] !== digitsString[index - 1]){
            flag = false;
        }
    }
    console.log(flag);
    console.log(sum);

}
