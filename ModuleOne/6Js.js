"use strict";

function isPositive(num) {
  if(Math.sign(num) === 1) {
    return true;
  }

  return false;
}

const answer = confirm('Should I calculate the square root?');

if(answer === true){
  const num = parseInt(prompt('Enter number to calculate square root'));
  if (isPositive(num) === true){
    document.getElementById("result").innerHTML = (`The square root of ${num} is ${Math.sqrt(num)}`)
  }
  else{
    document.getElementById("result").innerHTML = 'The square root of a negative number is not defined';
  }
}
else{
  document.getElementById("result").innerHTML = 'The square root is not calculated.';
}