"use strict";

/**
 * 
 * @param {*} array of numbers
 * @returns{*} sum of odd indices in arary
 */
function sumOddIndicesValue(array) {
  let sum = 0;
  let i = 0;
  for (const element of array) {

    if (i % 2 !== 0) {
      sum += element;
    }
    i++;

  }
  return sum;
}

sumOddIndicesValue([1, 3, 4, 6, 4, 7, 2]);