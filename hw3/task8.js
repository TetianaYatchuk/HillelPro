'use strict';

const num = parseInt(prompt('Enter a six digit number, 123123'));

const number1 = parseInt(num / 100000);
const number2 = parseInt(num / 10000) % 10;
const number3 = parseInt(num / 1000) % 10;
const number4 = parseInt(num / 100) % 10;
const number5 = parseInt(num / 10) % 10;
const number6 = num  % 10;

const isPalindrom = number1 === number6 && number2 === number5 && number3 === number4;

if (isPalindrom) {
    console.log(`Number: ${num} is palindrom`);
} else {
    console.log(`Number: ${num} is not palindrom`);
}