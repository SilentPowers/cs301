"use strict";

exports.addend = addend;
exports.rotateLeft = rotateLeft;
exports.rotateRight = rotateRight;
exports.rotateNRight = rotateNRight;
exports.fmrString = fmrString;
exports.filterPalindromes = filterPalindromes;
exports.matrixAddition = matrixAddition;
//1
/**
 * 
 * @param {*} arr of elements
 * @returns {first} first digit
 * @returns {last} last didigt
 */
function addend(arr) {
  const first = arr[0];
  const last = arr[arr.length - 1];
  const total = first + last;
  return total;
}

//2
const getMiddle = function (array) {
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

//3
/**
 * 
 * @param {*} array of numbers
 * @returns {*} array of number shifted left by one
 */
function rotateLeft(array) {
  for (let i = 0; i < 1; i++) {
    const shifted = array.shift(i);
    array.push(shifted);
  }
  return array;
}

//4
/**
 * @param {*} array of numbers
 * @returns {*} array  of number shifted right by one
 */
function rotateRight(array) {
  for (let i = 0; i < 1; i++) {
    const popped = array.pop(i);
    array.unshift(popped);
  }
  return array;
}

//5
/**
 * 
 * @param {*} array of numbers
 * @param {*} numberOfTimes to shift right
 * @returns {*} array of numbers
 */
function rotateNRight(array, numberOfTimes) {
  for (let i = 0; i < numberOfTimes; i++) {
    const popped = array.pop(i);
    array.unshift(popped);
  }
  return array;
}

//6
/**
 * 
 * @param {*} first number
 * @param {*} second number
 * @param {*} third number
 * @returns {number} sum of all digits 
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
    if (firstNum > 9) {
      firstNum = Math.floor(firstNum / 10);
    }
    sumDigits = Lastnum + firstNum;
    sumAllLeft += sumDigits;
  }
  return sumAllLeft;
}

//problem 8
/**
 * 
 * @param {array} strings array
 * @returns{array} arary of strings 
 * process: get first element of array, get first and last letter, compare first and last, if
 *  true then compare the next two until all letters have been compared. If false at anytime,
 * then not a palindrome
 * trure
 */
 function filterPalindromes(strings) {
  const palindromeArray = [];

  for (const word of strings) {
    let words = "";
    for (let i = word.length - 1; i >= 0; i--) {
      words += word[i];
    }
    if (word === words) {
      palindromeArray.push(words);
    }
  }
  return palindromeArray;
}


//problem 9
/**
 * 
 * @param {*} array double array of number
 * @returns {number} sum of all numbers in array46
 */
function matrixAddition(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }
  return sum;
}

exports.getMiddle = getMiddle;
