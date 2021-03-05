"use strict";
/**
 * 
 * @param {array} array of numbers
 * @returns {array} array of number shifted right once
 */
const rotateRight = function(array){
  for(let i = 0; i < 1; i++){
    const popped = array.pop(i);
    array.unshift(popped);
  }
  return array;
};

const myArray = [1,2,3,4,5,6,7,8,9,10];
console.log(rotateRight(myArray));