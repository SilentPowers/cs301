"use strict";

/*
Write a function addend(arr) that accepts an array of numbers 
as parameters and returns the
sum of firs and last elements of the array
*/


const addend = function(arr){
const first = arr[0];
const last = arr[arr.length-1];
const total = first + last;
return total;
};

console.log(addend([-10, 2, 3, 4, 20]));



