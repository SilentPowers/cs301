"use strict";

/*
Do matrix addition and print result on matrix format for following
*/

/**
 * 
 * @param {*} array double array of number
 * @returns {number} sum of all numbers in array46
 */
function matrixAddition(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }
  return sum;
}


matrixAddition([[0, 1, 2, 9, 8, 7], [6, 5, 4, 3, 4, 5]]);