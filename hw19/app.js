'use strict';

class SuperMath {
  constructor() {
    this.operations = ['+', '-', '*', '/', '%'];
  }

  check(obj) {
    if(!obj) {
      console.log('Invalid operator');
      this.input();
      return;
    }

    if (confirm(`Do you want to do this operation: x: ${obj.x}, y: ${obj.y}, znak: ${obj.znak} ?`)) {
      const result = this.calculate(obj);
      console.log(result);
    } else {
      this.input();
    }
  }

  input() {
    const x = parseFloat(prompt('Enter x'));
    const y = parseFloat(prompt('Enter y'));
    const znak = prompt('Enter znak');

    if (!this.operations.includes(znak)) {
      console.log('Invalid operator');
      this.input();
      return;
    }

    const obj = { x, y, znak };
    this.check(obj);
  }

  calculate(obj) {
    const { x, y, znak } = obj;

    switch (znak) {
        case '+':
          return x + y;
        case '-': 
          return x - y;
        case '*':
           return x * y;
        case '/':
          return x / y;
        case '%':
          return x % y;
        default:
          console.log('Invalid operation');
    }
  }
}

const myMath = new SuperMath();
console.log(myMath.check());
console.log(myMath.input());