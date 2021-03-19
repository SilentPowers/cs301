"use strict";




/*
2
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the
same element twice. You can return the answer in any order
*/

const addToTarget = function (array, target) {
  let pointer1 = 0;
  let pointer2 = array.length - 1;

  let sum = 0;
  while (pointer2 > pointer1) {
    let arrPoint1 = array[pointer1];
    let arrPoint2 = array[pointer2];
    sum = arrPoint1 + arrPoint2;
    if (sum > target) {
      pointer2--;
    } else if (sum < target) {
      pointer1++;
    }
    if (sum === target) {
      return [arrPoint1, arrPoint2];
    }
  }
  return 0;

};

//console.log(addToTarget([2, 3, 6, 7, 9], 10));


/*
3
Write a function named mostFrequent() that given an array, finds the most frequent element
in it. If there are multiple elements that appear maximum number of times, returns any one of
them.
#most_frequent
*/

const mostFrequent = function (arr) {
  let count = 0;
  let element = 0;
  for (let i = 0; i < arr.length; i++) {
    const tempElement = arr[i];
    let tempCount = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === tempElement) {
        tempCount++;

      }
      if (tempCount > count) {
        count = tempCount;
        element = tempElement;

      }
    }

  }
  return element;

};

//mostFrequent([1, 2, 3, 2, 2, 3, 4, 3, 5, 3]);



/*
 4
 Given an array of integers, write a function that finds the pair in array whose 
 sum is closest to 0. If there are more than one pair, return any pair.
// For e.g., [4,2,-1,3,-2,-3] → [2,-2]
*/

const closestToZero = function (arr) {
  let pointer1 = 0;
  let pointer2 = arr.length - 1;
  let sum = Infinity;
  let closest = [];
  let current = Infinity;
  arr.sort((a, b) => a - b);
  console.log(arr);
  while (pointer2 > pointer1) {
    let arrP1 = arr[pointer1];
    let arrP2 = arr[pointer2];
    //let current = Math.abs(arrP1 - arrP2);
    if (arrP2 < arrP1) {
      current = arrP1 + arrP2;
      pointer1++;
    }
    else if (arrP1 < arrP2) {
      current = arrP2 + arrP1;
      pointer2--;
    }
    else {
      return [arrP1, arrP2];
    }
    if (sum > current) {
      sum = current;
      closest = [arrP1, arrP2];
    }
  }
  return closest;
};
//console.log(closestToZero([4, 2, -1, 3, -2, -3]));
//[-3,-3,-1,2,3,4]


/*
5
Write a function, that given two arrays representing two non-negative integers with digits, adds
the two numbers, and return it as an array.
#add_two_numbers
Input Output Explanation
[3,4,2], [4,6,5] [7,0,8] 342+465=807
[1,1],   [1,2,3] [1,3,4] 11+123=134
[1,1],     [9,9] [1,1,0] 11+99=110
*/

/**
 * 
 * @param {*} arr1 array one
 * @param {*} arr2 arraytwo
 * @returns{*} array of positive integers
 */
function addTwoNumbers(arr1, arr2) {
  let sum1 = " ";
  let sum2 = " ";

  for (let i = 0; i < arr1.length; i++) {

    sum1 = sum1 + arr1[i];
  }

  for (let j = 0; j < arr2.length; j++) {

    sum2 = sum2 + arr2[j];
  }

  sum1 = Number(sum1);
  sum2 = Number(sum2);
  let sumTotal = sum1 + sum2;
  sumTotal = String(sumTotal);
  let newSum = [];
  for (let i = 0; i < sumTotal.length; i++) {
    newSum.push(Number(sumTotal[i]));
  }

  return newSum;
}
//addTwoNumbers([3, 4, 2], [4, 6, 5]);


// //6.
// Given two binary strings, return their sum (also a binary string).
// // The input strings are both non-empty and contains only characters 1 and 0.
// // #add_binary
const addBinary = function (a, b) {
  const binaryNum = (parseInt(a, 2) + parseInt(b, 2)).toString(2);
  return binaryNum;
};



/*
10.
Given an array containing n distinct numbers taken from 0,1,2,…,n,
 find the one that is missing from the array.
#missing_number
Input Output
[3,0,1] 2
[9,6,4,2,3,5,7,0,1] 8\

input: array of integers
output: missing number or -1 if false
process: sort it. find min of array, Create a loop to compare el with i, if 
i does not equal element in array than false;
*/
const missingNumber = function (arr) {
  arr.sort((a, b) => a - b);
  const min = Math.min(...arr);
  let i = min;

  for (const el of arr) {
    if (i !== el) {
      return [i];
    }
    else {
      i++;
    }
  }
  return -1;
};



/*
11
Given a sorted array and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.
#search_insert_position
input: array of integers
output: index of target number else, if not found, return index where it should be
*/
const searchInsertPosition = function(arr,target){
arr.sort((a,b) => a - b);
let i = 0;
for(const element of arr){
if(element === target){
  return i;
}
else{
  i++;
}
}
return -1;

};
console.log(searchInsertPosition([1, 3, 5, 6], 5));




/*
15
Given an array nums, write a function to move all 0's to the end of it while maintaining the
relative order of the non-zero elements.
#move_zeroes
Example:
Input: [0, 1, 0, 12, 3]
Output: [1,3,12,0,0]
Note: you must do this in-place without making a copy of the array.
*/

const moveZeros = function (arr) {
  arr.sort((a, b) => a - b);
  //[0,0,1,3,12]
  let i = arr[0];
  let j = arr[arr.length - 1];
  while (i < j) {
    while (i < j && arr[j] === 0) j--;
    if (arr[i] === 0) swap(i, j, arr); i++;
  }
  return arr;

};
//console.log(moveZeros([0, 1, 0, 12, 3]));
/**
 * 
 * @param {*} i first num
 * @param {*} j second num
 * @param {*} array of nums
 * @returns{*} returns nothing 
 */
function swap(i, j, array) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

/*
// // 16.
 Write a function that takes a string as input and 
reverse only the vowels of a string.
// // # reverse_vowels_of_a_string
*/

const reverseVowels = function (string) {
  const lastElement = string[string.length - 1];
  let stringEl = "";
  let newString = "";
  let stringIndex = "";
  for (let i = 0; i < string.length; i++) {
    //check for vowels, and add vowels to stringEl
    //use index for stringIndex to keep track of element of the vowel
    if (string[i].includes("a") || string[i].includes("e") || string[i].includes("i") || string[i].includes("o")
      || string[i].includes("u")) {
      stringEl += string[i];
      stringIndex += i;
      continue;
    }
    //add non-vowels to newString
    newString += string[i];
  }
  //start at last vowel and add to newString comparing it to first num of index
  for (let j = 0; j <= stringIndex.length; j++) {
    const index = stringIndex[j];

    // if (stringIndex[j]) {
    //   newString += stringEl[j];
    // }
    console.log(newString[index] + stringEl[j]);
  }
  //console.log(stringEl);
  console.log(newString);

};
//reverseVowels("hello");


//First duplicate
/**
 * @param {*} array of nums between 1 and length of array
 * @returns{*} array where first duplicate is
 * find the min index 
 */
function firstDuplicateValue1(array) {
  //initalize min. vallue to size of array
  let minSecondIndex = array.length;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const valueToCompare = array[j];
      if (valueToCompare === value) {
        minSecondIndex = Math.min(minSecondIndex, j);
      }
    }
  }
  if (minSecondIndex === array.length) return -1;

  return array[minSecondIndex];
}
//console.log(firstDuplicateValue1([2,1,5,2,3,3,4]));


//map the values to an index
//compare if element is -, if so then you found your answer

const firstDuplicateValue = function (array) {
  for (const value of array) {
    const absValue = Math.abs(value);
    if (array[absValue - 1] < 0) {
      return absValue;
    }
    //make that element -number index
    array[absValue - 1] *= -1;
  }
  return -1;
};
//console.log(firstDuplicateValue([2,1,5,2,3,3,4]));











//exports.addTwoNumbers = addTwoNumbers; //works
exports.addToTarget = addToTarget;
//exports.mostFrequent = mostFrequent; //works
exports.closestToZero = closestToZero;
//exports.addBinary = addBinary; //works
//exports.missingNumber = missingNumber;


