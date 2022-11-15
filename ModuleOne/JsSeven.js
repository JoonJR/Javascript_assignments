"use strict";

const dice = {
  sides: 6,
  roll: function () {
    return Math.floor(Math.random() * this.sides) + 1;
  }
}
const numdice = parseInt(prompt('How many dices you want to roll?'))
const button = document.getElementById('button');

let n = 1
let summ
while(n !== numdice){
  n++
  let result = dice.roll()
  summ += result;
}

document.getElementById("result").innerHTML = `Sum of rolled dice is: ${parseInt(summ)}`;