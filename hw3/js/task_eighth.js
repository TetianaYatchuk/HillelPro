'use strict';

let a = prompt(1);
let b = prompt(2);
let c = prompt(3);
let d = prompt(3);
let e = prompt(2);
let f = prompt(1);

console.log(String(a) + String(b) + String(c) + String(d) + String(e) + String(f));

let result = (a === f && b === e && c === d);

if(result) { 
  console.log('the number is mirrored')
} else {
  console.log('not mirrored')
};

const g = prompt(1);
const h = prompt(4);
const i = prompt(7);
const j = prompt(7);
const k = prompt(4);
const l = prompt(1);

const sum = String(g + h + i + j + k + l);

console.log(sum);

const compar = (g === l && h === k && i === j);

if(compar) {
  console.log('the number is mirrored')
} else {
  console.log('not mirrored')
};