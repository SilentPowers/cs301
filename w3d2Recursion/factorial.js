"use strict";

/**
 * 
 * @param {*}  num is positive
 * @returns {1} once num reduces to 0 or 1, base case
 * @returns {function} recursive case
 */
function factorial(num){
if( num === 0 || num === 1){
  return 1;
}
 return num * factorial(num -1);
}

console.log(factorial(4));