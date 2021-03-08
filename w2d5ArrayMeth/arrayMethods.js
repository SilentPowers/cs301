"use strict";

exports.insertArray = insertArray;
exports.isArrayEqual = isArrayEqual;
exports.isPalindrome = isPalindrome;
exports.reverse2String = reverse2String;
exports.enhancedIncludes = enhancedIncludes;
exports.ssReverse = ssReverse;
// 0
/**  
 * @param {*} index where the second array will be inserted into first array
 * @param {*} array takes in first array
 * @param {*} insert takes in second array
 * @returns {*} array
 */
function insertArray(index, array, insert) {
  array.splice(index, 0, ...insert);
  return array;
}
/////////////////////////////////////////////

// 1
/* 
Write a function, isArrayEqual, 
that returns true if two arrays have === elements, else false;
*/

/**
 * 
 * @param {*} array1 first array 
 * @param {*} array2 second array
 * @returns {boolean} true if arrays are equal
 * 
 */
function isArrayEqual(array1, array2) {
  let bool = true;
  let i = 0;

  while (bool !== false && i < array1.length || i < array2.length) {
    if (array1[i] !== array2[i]) {
      bool = false;
    }
    i++;
  }
  return bool;
}
/////////////////////////////////////////////

// 2
/*Write a function that checks if an array is palindrome by 
using push and pop array methods to
reverse the array and then isArrayEqual method you wrote for 1.
*/

/**
 * 
 * @param {*} array of numbers
 * @returns {boolean} true if array is palindrome
 */
function isPalindrome(array) {
  const arrayReversed = [];
  const length = array.length;
  const arrayCopy = [...array];

  for (let i = 0; i < length; i++) {

    const element = array.pop();
    arrayReversed.push(element);

  }
  return isArrayEqual(arrayCopy, arrayReversed);
}

/////////////////////////////////////////////

// 3
/**
 * @param {array} arr of strings
 * @returns {string} reversed string
 */
function reverse2String(arr) {
  arr.reverse();
  //Returns a string
  const str = arr.join("_");
  return str;
}
/////////////////////////////////////////////

// 4  
/*
Write a JavaScript function named enhancedIncludes that takes two parameters, an array, 
and a value to search in the array and return an array result with three values.
a. First value is boolean representing if the search value exists in the array.
b. Second value is the first index of value found in the array or -1
c. Third value is the last index of value found in the array or -1.
*/
/**
 * 
 * @param {*} array with value to search for
 * @param {*} value to search in array
 * @returns {boolean} isValueFound: true if value exists in array
 * @returns {firstIndex} firstIndex of value or -1
 * @returns {secondIndex} secondIndex of value or -1
 * process: includes() method for boolean , indexOf() and lastIndexOf() to find value
 */
function enhancedIncludes(array, value) {
  //Calls isFound function, returns true or false;
  const isValueFound = isFound(array, value);

  const firstIndex = array.indexOf(value);

  const secondIndex = array.lastIndexOf(value);

  return [isValueFound, firstIndex, secondIndex];

}

/**
 * 
 * @param {*} array to check
 * @param {*} value to find in aray
 * @returns {boolean} true if value is found
 * 
 */
function isFound(array, value) {
  let bool = false;
  if (array.includes(value)) {
    bool = true;
    return bool;
  }
  else {
    return bool;
  }
}

/////////////////////////////////////////////

// 5
/* 5. Write a function, ssReverse, that returns reversed copy of a given 
array (original array should remain intact). 
Do this without using reverse method, instead use splice and slice methods.  */

/**
 * 
 * @param {*} array to be reversed
 * @returns {array} new array reversed 
 * splice(start, delete, elements to insert)
   slice(start, end) 
 */
function ssReverse(array) {
  let arr = array.slice();
  let elementsToHold = [];
  const length = array.length;

  for (let i = 0; i < length; i++) {
    //const sliced =  arr.slice(i, i + 1);
    //const el = arr.splice(-1,1,sliced);
    const el = Number(arr.splice(-1).join());

    elementsToHold.push(el);
  }
  return elementsToHold;
}
console.log(ssReverse([4,5,6,7]));
