"use strict";

let candidatescount = parseInt(prompt("How many candidates there are?"))
let candidates = [],
    obj,
    name = [name],
    votes = 0;
for(let i = 1; i !== candidatescount + 1; i++){
  obj = {};
  obj['name'] = prompt(`Name for candidate ${i}`)
  obj['votes'] = 0
  candidates.push(obj)

}
console.log(candidates)