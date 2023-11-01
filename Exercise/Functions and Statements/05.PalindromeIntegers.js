function isPalindrome(array) {
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    let reverse = element.toString().split("").reverse().join("");
    if (element === Number(reverse)) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
isPalindrome([123, 323, 421, 121]);
isPalindrome([32, 2, 232, 1010]);
