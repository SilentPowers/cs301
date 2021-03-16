"use strict";

/*
Define an array to be sum-safe if none of its elements is equal to the sum of its elements.
 Thearray a = {5, -5, 0} is not sum-safe because the sum of its
  elements is 0 and a[2] == 0. However,
the array a = {5, -2, 1} is sum-safe because the sum of its elements is 4 and 
none of its elements
equal 4.
Write a function named isSumSafe that returns true if its argument is sum-safe, otherwise it
returns false.
For example, isSumSafe([5, -5, 0]) should return false and isSumSafe([5, -2, 1]) should return
true.
Return false if the array is empty
*/

/**
 * 
 * @param {*} array of integers
 * @returns{*} boolean
 * process: sum up all elements in array, check if sum includes any of the numbers in array
 */
function sumSafe(array) {
  let sum = 0;

  for (const element of array) {
    sum = sum + element;
  }
  const value = (array.includes(sum));

  return value;

}

//console.log(sumSafe([0, -2, 4, -6, 8]));


/////////////////////////////////
/*
Use array map method to map each value of a given array to its absolute value.
Original array     Mapped array
[-1,3,-4,5,6,9]    [1,3,4,5,6,9]
*/
const arrayMap = [1, -2, 3, -4, -5, 6];
const absolute = arrayMap.map(function (element) {

  const absElement = Math.abs(element);
  return absElement;
});
//console.log(absolute);




// Use array filter method to filter out strings that contains "_" from a string array
// Original array Filtered array
// ["this", "that", "Hi_there", "How_are_you"] ["this", "that"]

// const arrayString = ["this", "that", "Hi_there", "How_are_you"] ;
// const filterdArray = arrayString.filter(function(element){

// return !element.includes("_");

// });
// console.log(filterdArray);

/**
 * 
 * @param {*} array of strings
 * @returns{*} returns array of filtered strings
 */
function arrayString(array) {
  let filterdArr = [];

  for (const element of array) {
    if (!element.includes("_")) {
      filterdArr.push(element);
    }

  }
  return filterdArr;
}

//console.log(arrayString(["this", "that", "Hi_there", "How_are_you"]));




/*
An OneTwoOne array is defined as an array that has 1 as 
first and last elements and rest of the
elements of the array are 2. Write a function isOneTwoOne 
that takes an array as parameter
and returns whether the given array is OneTwoOne array or not.
Input Output
[1,2,2,1] True
[1,2,2,2,2,2] False (because last element is not 1)
[1,2,2,3,2,1] False (because of 3)
*/

const oneTwoOne = function (array) {

  const first = array[0];
  const last = array[array.length - 1];
  const twos = array.slice(1, array.length - 1);
  for (const element of twos) {
    if (element !== 2) {
      return false;
    }
  }
  if (first !== 1 && last !== 1) {
    return false;
  }
  else {

    return true;
  }
};

console.log(oneTwoOne([1, 2, 2, 2, 2, 1, 2]));




const camelCase = function (string) {

  const [first, second] = string.split("_");

  const newString = first + second.replace(second[0], second[0].toUpperCase());
  return newString;
};

console.log(camelCase("string_ified"));
