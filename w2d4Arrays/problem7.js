"use strict";

/*
Write a function filterRange(arr, a, b) that gets an array arr, 
looks for elements with
values >= a and values<= b and return a result as an array.
*/

const filterRange = function (arr, a, b) {
  const filterdArray = [];
  const finalArray = [];
  //how do i get the correct length?
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      filterdArray[i] = arr[i];
    }
  }
  console.log(filterdArray);
  for (let i = 0; i < filterdArray.length; i++) {
    if(filterdArray[i] === undefined || filterdArray[i] === " "){
      console.log(filterdArray[i]);
      continue;
    }
    else{
    finalArray.push(filterdArray[i]);
  }
}
  console.log(finalArray);

  return filterdArray;

};
const array = [444, 100, 50, 43, -4, 99];
filterRange(array, 33, 101); //[100,50,43,99]