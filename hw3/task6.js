'use strict';

const num = parseInt(prompt('Enter number, 111'));

const firstNum = parseInt(num / 100);
const secondNum = parseInt((num / 10) % 10);
const thirdNum = num % 10;

const sum = firstNum + secondNum + thirdNum;
const mult = firstNum * secondNum * thirdNum;

if (sum % 2 === 0) {
  console.log(`Sum of digits is even`);
} else {
  console.log(`Sum of digits is odd`)
}

if (sum % 5 === 0) {
  console.log(`Sum of all digits is divider of 5`);
} else {
  console.log(`Sum of all digits is not divider of 5`)
}

if (mult > 100) {
  console.log(`Multiplication of all digits is greater than 100`);
} else {
  console.log(`Multiplication of all digits is smaller than 100`)
}