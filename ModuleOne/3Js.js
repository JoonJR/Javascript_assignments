"use strict";
let num1str = window.prompt("Enter first integer: ");
let num2str = window.prompt("Enter second integer: ");
let num3str = window.prompt("Enter third integer: ");
let num1 = parseInt(num1str);
let num2 = parseInt(num2str);
let num3 = parseInt(num3str);
document.getElementById("numbers").innerHTML = num1str+ ', '+ num2str+ ', ' + num3str;
function multiplyBy()
{
        document.getElementById("result").innerHTML = num1 * num2 * num3;
}
function sumBy()
{
        document.getElementById("result").innerHTML = num1 + num2 + num3;
}
function averageBy()
{
        document.getElementById("result").innerHTML = (num1 + num2 + num3) / 3;
}
