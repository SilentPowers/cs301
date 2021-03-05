"use strict";

exports.insertArray = insertArray;
exports.isArrayEqual = isArrayEqual;


/**
 * 
 * @param {*} index where the second array will be inserted into first array
 * @param {*} array takes in first array
 * @param {*} insert takes in second array
 * @returns {*} array
 */
function insertArray(index, array, insert){
array.splice(index, 0, ...insert);
return array;
}





/*
Write a function, isArrayEqual, 
that returns true if two arrays have === elements, else false;
*/

/**
 * 
 * @param {*} array1 first array 
 * @param {*} array2 second array
 * @returns {boolean} true if arrays are equal
 */
function isArrayEqual(array1, array2) {
  let bool = true;
  let i = 0;

  while(bool !== false && i < array2.length){
    if (array1[i] !== array2[i]) {
      bool = false;
    }
    i++;
  
  }
  return bool;
}


