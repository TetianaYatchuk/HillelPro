'use strict';

alert('Welcome to calculator!');

const question = prompt('What action you want to do? Add, Diff, Mult, Div, Sqrt, Cos, Sin', 'add');
let startCalc = true;

answer : while (startCalc) {
  if (question) {
    const lowerCase = question.toLowerCase();
    switch (lowerCase) {
      case 'add' :
      case 'diff' :
      case 'mult' :
      case 'div' : {
        let firstNum;
        let secondNum;

        while (!Number.isInteger(firstNum)) {
          const choice = prompt('Enter first number', 0);
          if (choice === null) {
            choice = false;
            alert('Good by, see you later.');
            break answer;
          }

          if (choice === '' || isNaN(parseFloat(choice))) {
            alert('This is bad digit. Please enter correct digit');
            continue;
          }

          firstNum = parseFloat(choice);
        }

        while (!Number.isInteger(secondNum)) {
          const choice = prompt('Enter second number', 0);
          if (choice === null) {
            choice = false;
            alert('Good by, see you later.');
            break answer;
          }

          if (choice === '' || isNaN(parseFloat(choice))) {
            alert('This is bad digit. Please enter correct digit');
            continue;
          }

          secondNum = parseFloat(choice);
        }

        switch (lowerCase) {
          case 'add' : alert(`Sum of ${firstNum} and ${secondNum} is ${firstNum + secondNum}`); break;
          case 'diff' : alert(`Diff of ${firstNum} and ${secondNum} is ${firstNum - secondNum}`); break;
          case 'mult' : alert(`Mult of ${firstNum} and ${secondNum} is ${firstNum * secondNum}`); break;
          case 'div' : alert(`Div of ${firstNum} and ${secondNum} is ${firstNum / secondNum}`); break;
          default : alert('Sorry,somethings went wrong!'); break;
        }

        startCalc = confirm('Do you want continue work with me?');

        if (!startCalc) {
          alert('Good by, see you later.');
        }
        break;

      }
      case 'sqrt' :
      case 'cos' :
      case 'sin' : {
        let num;

        while (!Number.isInteger(num)) {
          const choice = prompt('Enter number', 0);
          if (choice === null) {
            choice = false;
            alert('Good by, see you later.');
            break answer;
          }

          if (choice === '' || isNaN(parseFloat(choice))) {
            alert('This is bad digit. Please enter correct digit');
            continue;
          }

          num = parseFloat(choice);
        }

        switch (lowerCase) {
          case 'sqrt' : {
            ( num >= 0 ) ? alert(`Root of ${num} is ${Math.sqrt(num)}`) : alert(`Number must be positive!`);
            break;
          }
          case 'cos' : alert(`Cosinus of ${num} is ${Math.cos(num)}`); break;
          case 'sin' : alert(`Sinus of ${num} is ${Math.sin(num)}`); break;
          default : alert('Sorry,somethings went wrong!'); break;
        }

        startCalc = confirm('Do you want continue work with me?');
        if (!startCalc) {
          alert('Good by, see you later.');
        }
        break;

      }
        default : {
            alert("I don\'t recognize your operation. Please choose correct operation like: Add, Diff, Mult, Div, Sqrt or Exp");
            break;
        }
    }
  } else {
    startCalc = false;
    alert('Good by, see you later.')
  }
}
