1. //1 Convert the following function into an arrow function named "arrowMyFunction".
// const myFunction = function (num1, num2) {
//       return num1 + num2;
// };



  let arrowMyfunction = (num1 , num2) => {
      return num1 + num2;
  };

  //2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit) . Name the function arrowAdd100
// const add100 = function (money) {
//     return money + 100;
// };

let arrowAdd100c = money  => { return money + 100 };

//3 Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string. **Not case sensitive
// Examples:
// countLetters('Hello my name is John', 'i') returns 1
// countLetters('Hello my name is John', 'h') returns 2
// countLetters('We love this city a lot, sometimes', 'e') returns 4

const countLetters = (string, letter) => {
    return string.split(letter).length -1;
}
console.log(countLetters('coding class is sooooooooo much fun', 'o'));