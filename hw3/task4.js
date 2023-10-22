'use strict';

const num = parseInt(prompt('Enter number, 21'));

const lastDig = num % 10;

if (lastDig % 2 === 0) {
  console.log(`Digit ${lastDig} is even`);
}

if (lastDig % 2 !== 0) {
  console.log(`Digit ${lastDig} is odd`);
}


