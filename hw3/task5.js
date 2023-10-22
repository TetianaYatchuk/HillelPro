'use strict';

const num = parseInt(prompt('Enter number, 21'));

const firstNum = parseInt(num / 10);
const secondNum = num % 10;

if (firstNum > secondNum) {
  console.log(`First number: ${firstNum} bigger than second number: ${secondNum}`);
} 

  if (firstNum < secondNum) {
  console.log(`First number: ${firstNum} smaller than second number: ${secondNum}`);
}

if (firstNum === secondNum) {
  console.log(`Numbers are equal`);
}