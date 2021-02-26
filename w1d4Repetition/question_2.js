/*
Write a Java program to calculate the factorial value of a given number.
 E.g., factorial 4 = 4*3*2*1 = 24
*/


const prompt = require('prompt-sync')();
const numIn = +prompt('Enter a number: ');
let factorial = 1;
for(let i = 0; i <=  numIn; i++){
  factorial *= i;
console.log(factorial);
}
