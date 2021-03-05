"use strict";

/* 6.	Write a JavaScript function that takes a string of  numbers as comma 
separated values, e.g, “32, 105,  -22”,  
and stores it into an array, e.g., [32, 105, -22] and do following operations
a.	Filters out negative values
b.	Maps the filtered elements to sum of its digits
c.	Reduce to get sum of all the elements and returns this value
*/

/**
 * 
 * @param {number} first num
 * @param {number} second num
 * @param {number} third num
 * @returns {number} sum of array
 * process: takes out negative numbers, sums up all its digits,
 *  3+2, 1+5, then adds them = 11;
 */
function fmrString(first, second, third) {
  const array = [first, second, third];
  let sumDigits = 0;
  let sumAllLeft = 0;
  for (let i = 0; i < 3; i++) {
    if (array[i] < 0) {
      array.pop(i);
    }
  }
  for (const element of array) {
    const Lastnum = element % 10;
    let firstNum = Math.floor(element / 10);
    while (firstNum >= 10) {
      firstNum = Math.floor(firstNum / 10);
    }
    sumDigits = Lastnum + firstNum;
    sumAllLeft += sumDigits;
  }
  console.log(sumAllLeft);
  return sumAllLeft;
}


fmrString(302, 1005, -22);