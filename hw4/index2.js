'use strict';

const greetings = prompt('Welcome to calculator!');
const question = prompt('What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos');

const answerAdd = ('add');
const answerDiff = ('diff');
const answerMult = ('mult');
const answerDiv = ('div');
const answerSqrt = ('sqrt');
const answerSin = ('sin');
const answerCos = ('cos');

if(question === answerAdd || question === answerDiff || question === answerMult || question === answerDiv) {
  const firstNum = parseInt(prompt('Enter first number', 0));
  const secondNum = parseInt(prompt('Enter second number', 0));

  if(!firstNum || !secondNum) {
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
  } else if(question === answerDiff) {
    alert(resultDiff);
  } else if(question === answerMult) {
    alert(resultMult);
  } else if(question === answerDiv) {
    alert(resultDiv);
  } 
} else {
  alert('Good by, see you later.')
}