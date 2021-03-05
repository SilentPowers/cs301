"use strict";

/*
Do matrix addition and print result on matrix format for following
*/

/**
 * 
 * @param {*} array double array of number
 * @returns {number} sum of all numbers in array
 */
function matrixAddition(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      console.log(array[i][j]);
      sum += array[i][j];
    }
  }
  return sum;
}


matrixAddition([[0, 1, 2], [9, 8, 7]], [[6, 5, 4], [3, 4, 5]]);


/**
 * 
 * @returns 
 */
function sumArrayElements(){
  var arrays= arguments, results= [], 
  count = arrays[0].length;
  let sum;
  let next= 0, i;
  while(next<count){
      sum= 0, i= 0;
      while(i<arrays.length){
        console.log(arrays);
          sum+= Number(arrays[i++][next]);
      }
      results[next++]= sum;
      console.log(results);
  }
  return results;
}

var a= [1, 2, 3], b= [4, 5, 6], c= [1, 2, 3];
sumArrayElements(a, b, c);