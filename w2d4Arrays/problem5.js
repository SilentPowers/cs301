"use strict";

/*
Modify rotate functions to rotate array by n times where, 
n is the second parameter passed in
the function (optional).
*/


const rotateNRight = function(array, numberOfTimes){
  for(let i = 0; i < numberOfTimes; i++){
    const popped = array.pop(i);
    array.unshift(popped);
  }
  return array;
};

const myArray = [1,2,3,4,5,6,7,8,9,10];
console.log(rotateNRight(myArray, 3));