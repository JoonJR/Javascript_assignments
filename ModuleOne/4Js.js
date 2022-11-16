"use strict";
window.alert("Welcome to Hogwarts School of Witchcraft and Wizardry");
let name = window.prompt("Enter your name");
document.querySelector('#hello').innerHTML = 'Hello, ' + name + '! Click draw to get a room!';

function drawRoom() {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(1);
    max = Math.floor(4);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const int = getRandomIntInclusive()
  if(int === 1){
    document.getElementById("result").innerHTML = name + ' you are Gryffindor.';
  }
  else if(int === 2){
    document.getElementById("result").innerHTML = name + ' you are Slytherin.';
  }
  else if(int ===3){
    document.getElementById("result").innerHTML = name + ' you are Hufflepuff.';
  }
  else if(int === 4){
    document.getElementById("result").innerHTML = name + ' you are Ravenclaw.';
}
}

