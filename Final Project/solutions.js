"use strict";


//#2
// Write a function mostFrequentSight, that takes an array of bird sightings where every element
// represents a bird type id. It determines the id of the most frequently sighted type. If more than 1
// type of birds are most frequent, return the smallest of their ids.
// Input Output Explanation
// [1,1,2,2,3] 1 There are two each of types 1 and 2, and one sighting of type 3. Pick
// the lower of the two types seen twice: type 1
// [1,4,4,4,5,3] 4 Type 4 is sighted most

//all numbers in array are between 1 - length, use this idea to map each element to an index
const mostFrequentSight = function (array) {
  for (const value of array) {
    //take absolute num of element in array
    const absValue = Math.abs(value);
    //if num is negative, then we've found our answer
    if (array[absValue - 1] < 0) {
      return absValue;
    }
    //make that number negative at index of array
    array[absValue - 1] *= -1;
  }
  return -1;
};

//3
/**
 * 
 * @param {*} arr 
 * @returns {*} num of total pairs
 * Input: arr
 * Output: total pair of nums
 * Process: find duplicates, use varaible to keep track of the num of duplicates
 */
function countSocksPairs(array) {
  let minSecondIndex = array.length;
let dups = 0;
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const valueToCompare = array[j];
      if (valueToCompare === value) {
       // minSecondIndex = Math.min(minSecondIndex, j);
        dups++;
      }
    }
  }
  //no duplicates exist
  //if (minSecondIndex === array.length) return -1;

  return dups;
}

console.log(countSocksPairs([1, 2, 1, 2, 1, 3, 2]));

//4
/*
The Utopian Tree goes through 2 cycles of growth every year. Each spring,
 it doubles in height. Each summer, its height increases by 1 meter.
Now, write a function computeHeight(height, cycles), that returns how tall
the tree will be after n growth cycles given the original height when planted.
For example, if the height of the tree when planted is 1 and number of growth cycles 
is n=4, result should be 7 based on following computation.
Growth cycles Height Growth cycle
0 1 Initial planted height
1 2 Spring growth (double)
2 3 Summer growth (plus 1)
3 6 Spring growth (double)
4 7 Summer growth (plus 1)
i.e. computeHeight(1,4) → 7

Input: height 
Output: height of tree after n - growth cycles
process: 
*/

// const computeHeight = function(height, cycles){


// };


//#5
// . Write a function, computeCharges, that will accept an array that contains objects with
// properties for the customer Id and charges. Your function should return an array that contains
// objects with the customer Id, average charge, and maximam charge.
// Hint: write helper functions to getMax and getAverage of an array of charges to keep your code
// organized.
// const charges = [{custId: 1,charges:[5,7,3]}, {custId: 2, charges: [20,60,50,30]}]
// computeCharges(charges)→
// [{custId: 1, average: 5, maximum: 7}, {custId: 2, average: 40, maximum: 60}]
/**
 * 
 * @param {*} array of objects
 * @returns {*} array of max, average, and customer id
 * process: break up array into custId, and charges 
 */

const computeCharges = function (array) {
  let max1= 0;
  let max2 = 0;
  let average1= 0;
  let average2 = 0;
  let custId1;
  let custId2;
  let custId;
  let charges;
  for ({custId, charges} of array) {

    if(custId === 1){
      max1 = getMax(charges);
      average1 = getAverage(charges);
      custId1 = custId;
    }

    else if(custId === 2){
      max2 = getMax(charges);
      average2 = getAverage(charges);
      custId2 = custId;
    }

  }
  return [{average: average1, custId: custId1, maximum: max1}, {average: average2, custId: custId2, maximum: max2}];
};
/**
 * 
 * @param {*} arr of charges
 * @returns {*} max number 
 */
function getMax(arr) {
  const max = Math.max(...arr);
  return max;
}
/**
 * 
 * @param {*} arr of positive nums
 * @returns {*} average number
 */
function getAverage(arr) {
  let total = 0;
  let average = 0;
  for (const el of arr) {
    total = total + el;
  }
  average = total / arr.length;
  return average;
}

//console.log(computeCharges([{ custId: 1, charges: [5, 7, 3] }, { custId: 2, charges: [20, 60, 50, 30] }]));


//6
// The distance between two array values is the number of indices between them. Write a
// function findMinDistance, that given an array finds the minimum distance
// between matching pairs of elements in the array. If no such value exists, return -1.
// Input Output Explanation
// [3,2,1,2,3] 2 There are two matching pairs of value: 3 and 2. Distance
// between indices of value 3 is 4 and distance between indices of value 2
// is 2 and 2 is the minimum.
// [7,1,3,4,1,7] 3 There are two matching pairs for values: 7 and 1. Distance between
// indices of value 7 is 5 and distance between indices of value 1 is
// 3 and 3 is the minimum.
// [1,2,3,4] -1 No such value exists


const findMinDistance = function(arr) {
  const dups = findDuplicates(arr);
  return dups;
};

/**
 * 
 * @param {*} array of positive integers
 * @returns{*} minimum index of duplicate num
 */
function findDuplicates(array) {
let minSecondIndex = array.length;
let dups = 0;
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

  //findMinDistance([3,2,1,2,3]);

exports.findMinDistance = findMinDistance;
//exports.computeCharges = computeCharges;