"use strict";

const prompt = require("prompt-sync")();
const input = +prompt("Enter a number to check if its prime: ");

/**
 * @param {number} num is the parameter 
 * @returns {boolean} 
 * //process:start indexing  up to the number, check if num is a factor of index
 */
function testPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 2;
}

//console.log(testPrime(1));
console.log(testPrime(input));
