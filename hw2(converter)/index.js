"use strict";

let numHours = prompt('number of hours');

console.log(numHours + ' ' + '*' + ' ' + '60min' + ' ' + '*' + ' ' + '60sec' + ' ' + '=' + ' ' + (numHours * 60 * 60) + 'sec');

let union = numHours * 60 * 60;

console.log(union);