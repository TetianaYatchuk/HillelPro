'use strict';

const firstNum = (prompt('Enter first number'));
const secondNum = (prompt('Enter second number'));
const thirdNum = (prompt('Enter third number'));

let union = (firstNum + secondNum + thirdNum);

console.log(union);

if(union % 2 === 0) {
  console.log('double number');
} else {
  console.log('unpaired number')
};

const result = (Number(firstNum) + Number(secondNum) + Number(thirdNum));

console.log(result % 5 === 0);

const prodOfNum = (Number(firstNum) * Number(secondNum) * Number(thirdNum));

console.log(prodOfNum);


if(prodOfNum > 100) {
  console.log('product of number > 100')
} else {
  console.log('product of number < 100')
};