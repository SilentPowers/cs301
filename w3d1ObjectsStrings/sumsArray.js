"use strict";

/**
 * @param{array} array1 of numbers
 * @param{aray} array2 of numbers
 * @returns{array} sums of array1 + array2
 */
function sumArrays(array1, array2){
let sums = [];
  for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array2.length; j++){
      sums.push(array1[i] + array2[j]);
      i++;
    }
  }
  console.log(sums);
}

sumArrays([1,2,3,4,5], [5,4,3,2,1]);