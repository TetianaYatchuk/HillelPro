'use strict';

function createHash (key, secret) {
  const keyArr = prompt('Enter some key');
  const secretArr = prompt('Enter some secret');
  const concat = keyArr + secretArr;
  let randomString = concat;
  for (let i = 0; i < key; i++) {
    let index = Math.floor(Math.random() * keyArr.length);
    randomString += keyArr[index];
  }
  for (let i = 0; i < secret; i++) {
    let index = Math.floor(Math.random() * secretArr.length);
    randomString += secretArr[index];
  }
  return btoa(randomString);
}

console.log(createHash());
console.log(createHash());
console.log(createHash());
console.log(atob(createHash()));
