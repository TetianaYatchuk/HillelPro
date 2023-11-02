'use strict';

function greeting() {
  alert('Welcome to calculator!');
}

greeting();



let startCalc = true;

const history = [];

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
          case 'add' : {
            history.push(`Sum: ${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
            alert(`Sum of ${firstNum} and ${secondNum} is ${firstNum + secondNum}`); break;
          }
          
          case 'diff' : {
            history.push(`Diff: ${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
            alert(`Diff of ${firstNum} and ${secondNum} is ${firstNum - secondNum}`); break;
          }
          case 'mult' : {
            history.push(`Mult: ${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
            alert(`Mult of ${firstNum} and ${secondNum} is ${firstNum * secondNum}`); break;
          }
          case 'div' : {
            history.push(`Div: ${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
            alert(`Div of ${firstNum} and ${secondNum} is ${firstNum / secondNum}`); break;
          }
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
              history.push(`Root: ${num} = ${Math.sqrt(num)}`);
              alert(`Root of ${num} is ${Math.sqrt(num)}`)
            } else {
              alert(`Number must be positive!`);
            }
            break;
          }
          case 'cos' : {
            history.push(`Cosinus: ${num} = ${Math.cos(num)}`);
            alert(`Cosinus of ${num} is ${Math.cos(num)}`); break;
          }
          case 'sin' : {
            history.push(`Sinus: ${num} = ${Math.sin(num)}`);
            alert(`Sinus of ${num} is ${Math.sin(num)}`); break;
          }
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
          } 

          let historyMessage = 'Your operation:\n\n';
          history.forEach(function(operation, index) {
            historyMessage += `${index + 1}. ${operation}\n`
          });
          alert(historyMessage)

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