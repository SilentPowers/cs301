"use strict";
/**
 * 
 * @param {*} array 
 */
const sortedSquaredArray = function(array){
let newArray = [];
  for(const element of array){
    newArray.push(element * element);
  }
  newArray.sort((a,b) => a - b);
  return newArray;

};

console.log(sortedSquaredArray([-1,-2,3,4,5]));