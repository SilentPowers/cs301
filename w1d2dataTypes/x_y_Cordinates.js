"use-strict";
// d = √( x 2 − x 1 )^2 + ( y 2 − y 1 )^2

const prompt = require('prompt-sync')();
const x1 = prompt("Enter x1 value: ")
const x2 = prompt("Enter x2 value: ")
const y1 = prompt("Enter y1 value: ")
const y2 = prompt("Enter y2 value: ")
const xDiff = x2 - x1;
const yDiff = y2 - y1;
//const sumSquares = xDiff**2 + yDiff**2;
const sumSquares = Math.pow(2,xDiff) + Math.pow(2,yDiff);
const distance = Math.sqrt(sumSquares);
console.log(distance);
