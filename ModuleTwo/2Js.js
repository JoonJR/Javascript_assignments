"use strict";

const heads = parseInt(prompt('How many participants?'))
let names = prompt('Enter the names with comma between.').split(', ')
console.log(names)

const list = document.getElementById("names");

names.sort();

for (let i = 0; i < names.length; ++i) {
  const li = document.createElement('li');
  li.innerText = names[i];
    list.appendChild(li);
    }
