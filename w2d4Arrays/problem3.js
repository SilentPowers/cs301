"use strict";

/*
Write a function to rotate the elements in an array to the left by 1.
*/

const rotateLeft = function(array){
  for(let i = 0; i < 1; i++){
    const shifted = array.shift(i);
    array.push(shifted);
    
  }
  return array;
};

const myArray = [1,2,3,4,5,6,7,8,9,10];
console.log(rotateLeft(myArray));