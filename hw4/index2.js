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

const sum = firstNum + secondNum;
const diff = firstNum - secondNum;
const mult = firstNum * secondNum;
const div = firstNum / secondNum;

const resultAdd = `Calculation is finished!\n\nSum: ${firstNum} + ${secondNum} = ${sum}.`;
const resultDiff = `Calculation is finished!\n\nSubtraction: ${firstNum} - ${secondNum} = ${diff}.`;
const resultMult = `Calculation is finished!\n\nMultiplication: ${firstNum} * ${secondNum} = ${mult}.`;
const resultDiv = `Calculation is finished!\n\nDivision: ${firstNum} / ${secondNum} = ${div}.`;

if(question === answerSqrt || question === answerSin || question === answerCos) {
  const num = parseInt(prompt('Enter number, 0'));

  // if(num === null || undefined) {
  //   alert('This is bad digit, good by!')
  // }

  // const resultRoot = `Calculation is finished!\n\nRoot: ${Math.sqrt(num)} = √${num}.`;
  // const resultSin = `Calculation is finished!\n\nSin: ${Math.sin(num)} = sin(${num}).`;
  // const resultCos = `Calculation is finished!\n\nCos: ${Math.cos(num)} = cos(${num}).`;

  if(question === answerSqrt) {
  alert(`Calculation is finished!\n\nRoot: ${Math.sqrt(num)} = √${num}.`);
  }

  if(question === answerSin) {
    alert(`Calculation is finished!\n\nSin: ${Math.sin(num)} = sin(${num}).`);
  }

  if(question === answerCos) {
    alert(`Calculation is finished!\n\nCos: ${Math.cos(num)} = cos(${num}).`);
  }

} else if(question === answerAdd || question === answerDiff || question === answerMult || question === answerDiv) {
    const firstNum = parseInt(prompt('Enter first number', 0));
    const secondNum = parseInt(prompt('Enter second number', 0));
  } else if(!firstNum || !secondNum) {
      alert('This is bad digit, good by!');
    }

    if(question === answerAdd) {
      alert(resultAdd);
    } else if(question === answerDiff) {
      alert(resultDiff);
    } else if(question === answerMult) {
      alert(resultMult);
    } else if(question === answerDiv) {
      alert(resultDiv);
    } else {
  alert('Good by, see you later.')
}


