"use strict";

/*
Now write a function named findAverage, that takes an array as an
argument and return average of the array values.

Create a second array filled with 10 random values between 0 to 10
and find the average of the array values.
*/

/**
 * @returns{array} Returns random number array
 */
function fillArray() {
  const myArray = [];
  for (let i = 0; i < 10; i++) {
    myArray[i] = Math.trunc(Math.random() * 10);
  }
  return myArray;
}



/**
 * 
 * @param {array} array of number
 * @returns{number} average of arrays
 */
function findAverage(array) {
  let total = 0;

  for (const element of array) {
    total = total + element;
  }
  const average = total / array.length;
  return average;
}

// console.log(findAverage([10, 20, 30, 40, 50]));
// console.log(findAverage(fillArray()));


/**
 * 
 * @param {array} balanced array
 * @returns {boolean} compared arrays
 */
function balance(balanced){
  const newArray = [];
  for(const element of balanced){
  if(element === "(" || element ==="[" || element === "{"){
    balanced.pop(element);
    newArray.push(element);
  }
}
for(let i = 0; i < newArray.length; i++){
if(newArray[i] !== balanced[i]){
  return false;
}
}
return true;
}
const balanced  = ["(",")","(", "[", "{", "}", "]", ")"]; 
console.log(balance(balanced));
