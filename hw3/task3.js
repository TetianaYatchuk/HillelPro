'use strict';

const firstNum = parseInt(prompt('Enter first number'));
const secondNum = parseInt(prompt('Enter second number'));

if (firstNum % secondNum === 0) {
  console.log(`${firstNum} is divider of ${secondNum}`);
} else {
  console.log(`${firstNum} is not divider of ${secondNum}`);
}

if (secondNum % firstNum === 0) {
  console.log(`${secondNum} is divider of ${firstNum}`);
} else {
  console.log(`${secondNum} is not divider of ${firstNum}`);
}
