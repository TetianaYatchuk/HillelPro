'use strict';

const firstUsersnumbers = prompt('Enter five any numbers whithout space, 12345').split('');
const stringArray = prompt('Enter some string whithout space, asdfg').split('');
const secondUsersnumber =  prompt('Enter three any numbers whithout space, 123').split('');
const elementTodelete = prompt('Enter elements,which you want to delete, like: 1a2b7...');

const result = firstUsersnumbers.concat(stringArray, secondUsersnumber);

console.log(result);

const removeElement = (array, el) => {
  let result = [];

  for (const element of array) {
    if (!el.includes(element)) result += element;
  }
  return result;
}

console.log(removeElement(result, elementTodelete).split(''));