"use strict";
const arrayOne = [-1,3, 5, 10, 20, 28];
const arrayTwo = [15,17,26, 134, 135];
/**
 * @param {*} arrayOne 
 * @param {*} arrayTwo 
 * @returns{*} smallest diffrence of of a pair(one from each array) whose absolute
 * difference is closest to zero, returns an arrray conatining these two numbers, with 
 * the number from the first array in the first pos.
 * 
 */
function smallestDifference(arrayOne, arrayTwo) {

  let pointer1 = 0;
  let pointer2 = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];
  while (pointer1 < arrayOne.length && pointer2 < arrayTwo.length) {
    const secondNum = arrayTwo[pointer2];
    const firstNum = arrayOne[pointer1];
    if (secondNum < firstNum) {
      current = firstNum - secondNum;
      pointer2++;
      // console.log("pointer2: " + pointer2);
      // console.log("pointer1: " + pointer1);
    }
    else if (firstNum < secondNum) {
      current = secondNum - firstNum;
      pointer1++;

    }
    else {
    return [firstNum,secondNum];
    }
    if (current < smallest) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }

  } 
  return smallestPair;

}
console.log(smallestDifference(arrayOne, arrayTwo));

