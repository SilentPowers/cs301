"use strict";

/*
Write a function filterRange(arr, a, b) that gets an array arr, 
looks for elements with
values >= a and values<= b and return a result as an array.
*/

const filterRange = function (arr, a, b) {
  const filterdArray = [];
  const finalArray = [];
  //get all elements within a to b;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      filterdArray[i] = arr[i];
    }
  }
  //put elements into a new array with no empty spaces or undefined spaces
  for (let i = 0; i < filterdArray.length; i++) {
    if(filterdArray[i] === undefined || filterdArray[i] === " "){
      continue;
    }
    else{
    finalArray.push(filterdArray[i]);
  }
}
  return finalArray;
};
const array = [444, 100, 50, 43, -4, 99];
console.log(filterRange(array, 33, 101)); //[100,50,43,99]