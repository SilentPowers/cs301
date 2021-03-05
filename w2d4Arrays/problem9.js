"use strict";

/*
Do matrix addition and print result on matrix format for following
*/

/**
 * @param {*} array1 first matrix
 * @param {*} array2 second matrix
 * @returns {array} sum of all numbers in array
 */
function matrixAddition(array1, array2) {
  const sumMatrix = [[],[]];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array1[i].length; j++) {
      sumMatrix[i][j] = array1[i][j] + array2[i][j];
    }
  }
  console.log(sumMatrix);
  return sumMatrix;
}


matrixAddition([[0, 1, 2], [9, 8, 7]], [[6, 5, 4], [3, 4, 5]]);
