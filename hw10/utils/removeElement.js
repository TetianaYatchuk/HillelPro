'use strict';

function arrayUnion(array1, array2) {
  if (array1.length !== array2.length) return false

  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!arrayUnion(array1[i], array2[i])) {
        return false
      }
    } else if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}

function removeEl(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(item) && Array.isArray(array[i])) {
      if ( arrayUnion(item, array[i])) {
        array.splice(i, 1)
        i--
      }
    } else if (item === array[i]) {
      array.splice(i, 1)
      i--
    }
  }
}

const array = [1, 2, 3, 4, 5, 'string', [1, 2, 3]];
removeEl(array, 'string');
console.log(array)