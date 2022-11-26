"use strict";

let number = parseInt(prompt("Enter number, enter same number to quit"));
const numbersArray = [];

while(!numbersArray.includes(number)){
  numbersArray.push(number)
  number = parseInt(prompt("Enter number, enter same number to quit"))
}
alert("You already entered that number.")
numbersArray.sort(function(a, b) {
  return a - b;
});
numbersArray.reverse()
console.log(numbersArray)