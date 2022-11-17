"use strict";

let names = prompt('Enter the names of your 6 dogs :D with comma between.').split(', ')
console.log(names)

const list = document.getElementById("names");

names.sort(); //sorts alphabetically
names.reverse()

for (let i = 0; i < names.length; ++i) {  //prints in an ordered list to the web page
  const li = document.createElement('li');
  li.innerText = names[i];
    list.appendChild(li);
    }