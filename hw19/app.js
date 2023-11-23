'use strict';

class SuperMath {
  check(obj) {
    const x = obj;
    const y = obj;
    const znak = obj;

    if(x, y, znak) {
      return prompt(`Do you want to do operation ${znak} with x=${x} and y=${y}?`);
    } else {
      return this.input();
    }
  }

  input() {
    return prompt('Enter your number');
  }
}

const myMath = new SuperMath();
console.log(myMath);