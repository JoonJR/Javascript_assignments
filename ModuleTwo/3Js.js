"use strict";

let names = prompt('Enter the names of your 6 dogs :D with comma between.').split(', ')
console.log(names)

const list = document.getElementById("names");

names.sort();
names.reverse()

for (let i = 0; i < names.length; ++i) {
  const li = document.createElement('li');
  li.innerText = names[i];
    list.appendChild(li);
    }