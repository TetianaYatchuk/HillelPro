'use strict';

const greetings = prompt('Welcome to calculator!');
const question = prompt('What action you want to do? add, diff, mult, div, sqrt, sin, cos');

switch (question) {
  case 'add' : 
  case 'diff' : 
  case 'mult' : 
  case 'div' : {
    const firstNum = parseInt(prompt('Enter first number', 0));
    firstNum ? '' : alert('This is bad digit, good by!');
    const secondNum = parseInt(prompt('Enter second number', 0));
    secondNum ? '' : alert('This is bad digit, good by!');

    const sum = firstNum + secondNum;
    const diff = firstNum - secondNum;
    const mult = firstNum * secondNum;
    const div = firstNum / secondNum;

    const resultAdd = `Calculation is finished!\n\n'Sum of: ${firstNum} and ${secondNum} = ${sum}.`;
    const resultDiff = `Calculation is finished!\n\nSubtraction of: ${firstNum} and ${secondNum} = ${diff}.`;
    const resultMult = `Calculation is finished!\n\nMultiplication of: ${firstNum} and ${secondNum} = ${mult}.`;
    const resultDiv = `Calculation is finished!\n\nDivision of: ${firstNum} and ${secondNum} = ${div}.`;

    switch (question) {
      case 'add' : alert(resultAdd); break
      case 'diff' : alert(resultDiff); break 
      case 'mult' : alert(resultMult); break 
      case 'div' : alert(resultDiv); break 
    } 
    break 
  }
  case 'sqrt' : 
  case 'sin' : 
  case 'cos' : {
    const num = parseInt(prompt('Enter number, 0'));
    num ? '' : alert('This is bad digit, good by!');

    const resultRoot = `Calculation is finished!\n\nRoot: ${Math.sqrt(num)} = √${num}.`;
    const resultSin = `Calculation is finished!\n\nSinus: ${Math.sin(num)} = sin(${num}).`;
    const resultCos = `Calculation is finished!\n\nCosinus: ${Math.cos(num)} = cos(${num}).`;
      switch (question) {
        case 'sqrt' : alert(resultRoot); break
        case 'sin' : alert(resultSin); break 
        case 'cos' : alert(resultCos); break 
      }
    }
  default : alert('Good by, see you later.'); break;
}






