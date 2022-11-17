"use strict";

const numbers = []
let n1 = parseInt(prompt('Enter first integer'))
let n2 = parseInt(prompt('Enter second integer'))
let n3 = parseInt(prompt('Enter third integer'))
let n4 = parseInt(prompt('Enter fourth integer'))
let n5 = parseInt(prompt('Enter fifth integer'))
numbers.push(n1, n2, n3, n4, n5)
console.log(numbers)

for(let i = numbers.length -1; i >= 0; i--) {
  console.log(numbers[i])
}

