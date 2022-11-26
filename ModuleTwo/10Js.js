"use strict";

let candidatescount = parseInt(prompt("How many candidates there are?"))
let list = [],
obj;

for(let i = 1; i !== candidatescount + 1; i++){
  obj = {name: 'name', votes: 'votes'};
  obj['name'] = prompt(`Name for candidate ${i}`)
  obj['votes'] = 0
  list.push(obj)

}

let voters = parseInt(prompt("How many voters?"))
for (let j = 1; j <= voters; j++) {
    let namesVotes = prompt("Enter the candidate's name");
    for (let a=0; a<list.length; a++){
        if (namesVotes === list[a]['name']){
            list[a]['votes'] += 1;
        }
        else {
            list[a]['votes'] += 0;
        }
    }
}

list.sort((a, b) => (a.votes < b.votes ? 1 : (a.votes > b.votes) ? -1 : 0));

console.log(`The winner is ${list[0]['name']} with ${list[0]['votes']} votes.`)
console.log('results:')

const size = Object.keys(list).length;
for(let c = 0; c !== size; c++) {
    console.log(`${list[c]['name']}: ${list[c]['votes']} votes`);
}