"use strict";

const prompt = require('prompt-sync')();
const input = +prompt("Enter a number to check if its prime: ");

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
