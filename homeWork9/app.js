'use strict';

function showMessage(text) {
  alert(text);
}

showMessage('Welcome to calculator!');

let startCalc = true;

const history = [];

function calculate(operationName, result) {
  history.push(`${operationName} = ${result}`);
  alert(`${operationName} = ${result} `);
}

function showDefault(text) {
alert(text);
}

answer : while (startCalc) {
  const res = prompt(`What action you want to do? Add, Diff, Mult, Div, Sqrt, Cos, Sin, History`, 'add');

  if (res) {
    const resTolowerCase = res.toLowerCase();
    switch (resTolowerCase) {
      case 'add' :
      case 'diff' :
      case 'mult' :
      case 'div' : {
        let firstNum;
        let secondNum;

        while (!Number.isInteger(firstNum)) {
          let choice = prompt('Enter first number', 0);
          if (choice === null) { 
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
          let choice = prompt('Enter second number', 0);
          if (choice === null) { 
            alert('Good by, see you later.');
            break answer;
          }

          if (choice === '' || isNaN(parseFloat(choice))) {
            alert('This is bad digit. Please enter correct digit');
            continue;
          }

          secondNum = parseFloat(choice);
        }

        switch (resTolowerCase) {
          case 'add' : calculate(`Sum : ${firstNum} + ${secondNum}`,firstNum + secondNum);break;
          case 'diff' : calculate(`Diff : ${firstNum} - ${secondNum}` , firstNum - secondNum);break;
          case 'mult' :calculate(`Mult : ${firstNum} * ${secondNum}` , firstNum * secondNum);break;
          case 'div' : calculate(`Div : ${firstNum} / ${secondNum}` , firstNum / secondNum);break;
          default : alert('Sorry,somethings went wrong!'); break;
        }

        startCalc = confirm('Do you want continue work with me?');
        if (!startCalc) {
          alert('Good by, see you later.');
        }
        break;
      }

      case 'sqrt':
      case 'cos':
      case 'sin': {
        let num;

        while (!Number.isInteger(num)) {
          const choice = prompt('Enter number', 0);
          if (choice === null) {
            alert('Good by, see you later.');
            break answer;
          }

          if (choice === '' || isNaN(parseFloat(choice))) {
            alert('This is bad digit. Please enter correct digit');
            continue;
          }

          num = parseFloat(choice);
        }

        
        switch (resTolowerCase) {
          case 'sqrt' : {
            if (num >= 0 ) {
              calculate(`Root: ${num}`, Math.sqrt(num));break;
            } else {
              alert(`Number must be positive!`);
            }
            break;
          }
          case 'cos' : calculate(`Cosinus: ${num}` , Math.cos(num));break;
          case 'sin' : calculate(`Sinus: ${num}` , Math.sin(num));break;
          default : alert('Sorry,somethings went wrong!'); break;
        }

        startCalc = confirm('Do you want continue work with me?');
        if (!startCalc) {
          alert('Good by, see you later.');
        }
        break;
      }

      case 'history' :{
          if (history.length === 0) {
            alert('There are no operations in the history yet.');break;
          } else {
            let historyMessage = 'Your operation:\n\n';
            history.forEach(function(operation, index) {
              historyMessage += `${index + 1}. ${operation}\n`
            });
            alert(historyMessage)
          }

          startCalc = confirm('Do you want continue work with me?');
          if (!startCalc) {
            alert('Good by, see you later.');
          }
          break;
      }
      default : {
        showDefault("I don\'t recognize your operation. Please choose correct operation like: Add, Diff, Mult, Div, Sqrt or Exp");
        break;
      }
    }
  } else {
    startCalc = false;
    alert('Good by, see you later.')
  }
} 

