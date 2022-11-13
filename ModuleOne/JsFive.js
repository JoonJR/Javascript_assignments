"use strict";
const year = parseInt(prompt("Enter a year to check leap year"))

if(year % 4 === 0){
  if(year % 100 === 0 && year % 400 !== 0) {
    document.querySelector('#result').innerHTML = `The year ${year} is not a leap year`
  }
  else{
    document.querySelector('#result').innerHTML = `The year ${year} is a leap year`
    }
}
else {
  document.querySelector('#result').innerHTML = `The year ${year} is not a leap year`
}