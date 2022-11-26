"use strict";

let evenNumbers = [];

function even(array){
  for (let number of array){
    if((0 === number % 2)){
      evenNumbers.push(number)
    }
  }
}

const numbers = [2, 7, 4, 1243, 25, 23, 34, 24];
even(numbers);
console.log(numbers);
console.log(evenNumbers);
