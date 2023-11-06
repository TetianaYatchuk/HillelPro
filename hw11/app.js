function factorial(n) {
  if(n !== 1) {
  return n * factorial(n - 1);
  } else {
    return 1
  }
}

const n = 5;
const result = factorial(n);
console.log(`${n}! = ${result}`);

