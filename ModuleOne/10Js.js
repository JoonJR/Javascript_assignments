let times = parseInt(prompt("How many times you want to roll the dice?"));
let guess = parseInt(prompt("Guess the sum of the dices rolled"));
let count = 0;
let probability = 0;
let test = 10000;

for (let a = 0; a<=test; a++){
  let sum = 0;
  for (let i = 1; i<= times; i++){
    let dice = (Math.floor(Math.random() * 6) + 1);
    sum += dice
  }
  if (sum === guess){
    count += 1;
  }
}
probability = (count / test)*100;
document.getElementById("info").innerHTML = `The probability to get ${guess} with ${times} dice is ${probability.toFixed(2)}`;