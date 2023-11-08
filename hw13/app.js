function changeSum () {
  let number = 0;
  return function (sum) {
    number += sum;
    console.log(number);
  }
}

const change = changeSum();
change(3);
change(5);
change(20);

