"use strict";

const numbers = []
for(let j = 0; j !== 5; j++)
  numbers.push(parseInt(prompt('Enter a number')))

console.log(numbers)

for(let i = numbers.length -1; i >= 0; i--) {
  console.log(numbers[i])
}
