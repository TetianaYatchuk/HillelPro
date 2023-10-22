'use strict';

const num = parseInt(prompt('Enter number, 111'));

const firstNum = parseInt(num / 100);
const secondNum = parseInt((num / 10) % 10);
const thirdNum = num % 10;

if (firstNum === secondNum && secondNum === thirdNum) {
  console.log(`All digits are the same`);
} else { 
  console.log(`All digits are not the same`)
}

if (firstNum === secondNum || secondNum === thirdNum || firstNum === thirdNum) {
  console.log(`Digits have pairs`);
} else {
  console.log(`Digits don't have pairs`);
}

