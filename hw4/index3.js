'use strict';

const greetings = prompt('Welcome to calculator!');
const question = prompt('What action you want to do? add, diff, mult, div, sqrt, sin, cos');

const answerAdd = ('add');
const answerDiff = ('diff');
const answerMult = ('mult');
const answerDiv = ('div');
const answerSqrt = ('sqrt');
const answerSin = ('sin');
const answerCos = ('cos');

if(question === answerAdd ||question === answerDiff || question === answerDiv || question === answerMult) {
  const firstNum = parseInt(prompt('Enter first number', 0));
  const secondNum = parseInt(prompt('Enter second number', 0));

  if(isNaN(firstNum) || isNaN(secondNum)) {
    alert('This is bad digit, good by!');
  }

  const sum = firstNum + secondNum;
  const diff = firstNum - secondNum;
  const mult = firstNum * secondNum;
  const div = firstNum / secondNum;

  const resultAdd = `Calculation is finished!\n\nSum: ${firstNum} + ${secondNum} = ${sum}.`;
  const resultDiff = `Calculation is finished!\n\nSubtraction: ${firstNum} - ${secondNum} = ${diff}.`;
  const resultMult = `Calculation is finished!\n\nMultiplication: ${firstNum} * ${secondNum} = ${mult}.`;
  const resultDiv = `Calculation is finished!\n\nDivision: ${firstNum} / ${secondNum} = ${div}.`;

  if(question === answerAdd) {
    alert(resultAdd);
    alert('Good by, see you later.')
  } else if(question === answerDiff) {
    alert(resultDiff);
    alert('Good by, see you later.')
  } else if(question === answerMult) {
    alert(resultMult);
    alert('Good by, see you later.')
  } else if(question === answerDiv) {
    if(secondNum === 0) {
      alert('Division into zero is impossible.')
    } else {
      alert(resultDiv);
      alert('Good by, see you later.')
    }
  } 
} else if(question === null || undefined) {
  alert('Good by, see you later.')
} else if(question === answerSqrt || question === answerSin || question === answerCos) {
  const num = parseInt(prompt('Enter number, 0'));

  if(isNaN(num)) {
  alert('This is bad digit, good by!')
} 

  const resultRoot = `Calculation is finished!\n\nRoot: ${Math.sqrt(num)} = √${num}.`;
  const resultSin = `Calculation is finished!\n\nSin: ${Math.sin(num)} = sin(${num}).`;
  const resultCos = `Calculation is finished!\n\nCos: ${Math.cos(num)} = cos(${num}).`;

  if(question === answerSqrt) {
    alert(resultRoot);
    alert('Good by, see you later.')
    } else if(question === answerSin) {
      alert(resultSin);
      alert('Good by, see you later.')
    } else if(question === answerCos) {
      alert(resultCos);
      alert('Good by, see you later.')
    }
} else {
  alert('Good by, see you later.')
}