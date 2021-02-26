'use strict';
const prompt = require('prompt-sync')();
const input = prompt("Enter a number: ");
let sum = 0;
for(let i = 0; i < input.length; i++){
  let num = Number(input[i]);
   sum = sum + num;
}
console.log(sum);

