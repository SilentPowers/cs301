"use strict";

/**
 * 
 * @param {array} array of numbers
 * @returns {number} min number
 */
function findMin(array) {
  let min = Infinity;
  for (const element of array) {

    if (element < min) {
      min = element;
    }
  }
  return min;
}


findMin([5, 4, 5, 3, 2, 1, 8]);