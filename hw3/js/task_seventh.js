'use strict';

const firstNum = (prompt('Enter first number'));
const secondNum = (prompt('Enter second number'));
const thirdNum = (prompt('Enter third number'));

let union = (firstNum + secondNum + thirdNum);

console.log(union);

const allEqNum = (firstNum === secondNum && secondNum === thirdNum && firstNum === thirdNum);

if(allEqNum) {
  console.log('all numbers are the same');
} else {
  console.log('the numbers are not the same')
}

const equalityOfNum = (firstNum === secondNum || secondNum === thirdNum || firstNum === thirdNum) ;

if(equalityOfNum) {
  console.log(true)
} else {
  console.log(false)
}