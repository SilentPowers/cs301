"use strict";

/*
Write a function named getMiddle that returns the value of 
the middle element in an array. If
the array has an even number of elements, 
then this function must return the average of the
two middle elements
*/

const getMiddle = function(array){
  let middle;
  const mid = array.length/2;
  for(let i = 0; i < array.length/2; i++){
    middle = array[i];
  }
  if(array.length % 2 === 0){
    let average = array[mid-1];
    average = average + array[mid];
    return average / 2;
  }
  return middle;
};

console.log(getMiddle([-1, -100, 1, 2, 3, -55]));