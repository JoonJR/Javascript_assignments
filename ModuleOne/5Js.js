"use strict";
const year = parseInt(prompt("Enter a year to check leap year"));

function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 === year % 4) && (0 !== year % 100) || (0 === year % 400)) {
        document.getElementById("result").innerHTML = year + ' is a leap year';
    } else {
        document.getElementById("result").innerHTML = year + ' is not a leap year';
    }
}
checkLeapYear(year);
