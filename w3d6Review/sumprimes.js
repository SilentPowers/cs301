"use strict";


/**
 * Write a JavaScript function isSumOfPrimesEven that takes an array of positive integers
as an argument and returns true if the sum of all the prime elements in the given array is
even otherwise returns false. If the array is empty or if the array does not contain any
prime element it should return false.
 */
/**
 * 
 * @param {*} arr of positive integers
 * @returns {boolean} sum is true if all prime elments is even
 * process: find prime elements in the array, sum up prime elements, 
 * if sum is even return true, if empy or no prime elements return false, i
 * f sum is odd return false
 * 
 * 
 */
function isSumOfPrimesEven(arr) {

  let sum = 0;
  if (arr === 0) {
    return false;
  }
  for (const element of arr) {
    for (let i = 2; i < arr.length; i++)
      if (element % i !== 0) {
        sum = sum + element;
      }
  }
  if (sum % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}
//  for (let i = 2; i < numIn; i++) {

//   if (numIn % i === 0) {
//     return false;

//   }
//   return numIn > 2;
// }


// console.log(isSumOfPrimesEven([1,2,3,4,5,6]));


/**
 * An array is called a perfectly odd array if every element at the odd indices of the 
 * array is also odd. Write a function named isPerfectlyOdd that takes an array of
 *  integers as a parameter and checks whether it is perfectly odd.
 *  Return false if the array is an empty array
 */
function isPerfectlyOdd(array) {
  let bool = false;

  for (let i = 0; i < array.length; i++) {

    if (i % 2 !== 0 && array[i] % 2 !== 0) {
      bool = true;
    }
    else if (i % 2 !== 0 && array[i] % 2 === 0) {
      bool = false;
    }

  }
  return bool;

}

// console.log(isPerfectlyOdd([])); // false
// console.log(isPerfectlyOdd([2,3,4,5,7,8])); // false
// console.log(isPerfectlyOdd([3,9,9,5,5,7,9])); // true
// console.log(isPerfectlyOdd([0,1,2,3,4,5,6,7])); // true

// Write a function that given an array of integers returns the sum of elements at the prime
// indices. For e.g. for an array [1,5,6,7,8,3] result would be a sum of 6+7+3=16 
//which are values at the prime indices of the array.

/**
 * 
 * @param {*} array of positive integers
 * @returns{*} sum of prime indices
 * process: find prime indices of array, extract the element from prime index, 
 * add it to the sum
 * indexOf method?
 */
function sumPrimeElements(array) {
  let sum = 0;
  const primeArray = getPrimes(array);
  for (const element of primeArray) {
    sum = sum + element;
  }
  console.log(sum);
  return sum;

}


const getPrimes = function (arr) {
  let primeArr = [];
  let j = 0;
  for (let i = 2; i < arr.length; i++) {

    if (j % i !== 0) {
      primeArr.push(arr[j]);
      j++;
    } else {
      j++;
    }
  }
  return primeArr;
};

//sumPrimeElements([1, 2, 3, 4, 5]);



// Write a function that takes a string parameter and returns the middle 
//character of the string. If string is of even length then function
// should return the middle two characters.
/**
 * @param {*} string of letters
 * @returns {*} mid element
 * 
 */
function middle(string) {
  const length = string.length;
  const middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    return string[middle] + string[middle - 1];
  }
  else {
    return string[middle];
  }
}

//console.log(middle("abcd"));




/*
 * Write a function isSumEqual that takes two array parameters and returns true if the
sum of elements in both arrays are equal.
 */

const isSumEqual = function (array1, array2) {
  let sum1 = 0;
  let sum2 = 0;
  let totalSum = 0;
  const max1 = Math.max(array1.length);
  const max2 = Math.max(array2.length);
  const max = Math.max(max1, max2);
  
  for (let i = 0; i < max; i++) {
    sum1 = sum1 + array1[i];
    sum2 = sum2 + array2[i];
  }
  totalSum = sum1 + sum2;
  console.log(totalSum);
  return totalSum;

};

isSumEqual([1, 2, 3,4], [3, 2, 1]);