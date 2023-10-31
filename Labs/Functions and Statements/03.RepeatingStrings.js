// function repeatString(text, count){
//     console.log(text.repeat(count));
// }
function repeatString (text, count){
    let result = "";
    for (let index = 0; index < count; index++) {
        result+=text;
    }
    console.log(result);
}
repeatString("abc",3)
repeatString("js",5)