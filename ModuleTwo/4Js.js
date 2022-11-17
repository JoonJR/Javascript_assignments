"use strict";
let number = parseInt(prompt('Enter a number, 0 to quit.'));
let numbersArray = [];
while(number !== 0){
  numbersArray.push(number)
  number = parseInt(prompt('Enter a number, 0 to quit.'))
  }
numbersArray.sort(function(a, b) {
  return a - b;
});
numbersArray.reverse()
console.log(numbersArray)
