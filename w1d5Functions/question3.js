"use strict";

/*
Write a program that calculates the total volume of a house, including the volume of the roof
space. Your program must allow the user to enter width, depth, height and sweep as shown in
figure below. Write code to call and test your function

houseVolume = livingVolume + roofVolume
livingVolume = width * height * depth
roofVolume = triangleArea*depth
triangleArea = √s(s−a)(s−b)(s−c)
s = (a+b+c)/2
Write separate functions for each of the named formulas

input: width, depth, height, sweep
output: total volume of the house
process: Need to get the triangleArea first, need 3 values (a,b,c) for sweep???
        Ask for depth to calculate roofVolume
        Ask for width, height
        Calculate houseVolume last
*/
function callPrompt() {
  const prompt = require('prompt-sync')();
  const depth = +prompt("Enter depth: ");
  const width = +prompt("Enter width: ");
  const height = +prompt("Enter height: ");
  const sweep = +prompt("Enter sweep: ");
  return houseVolume(width, depth, height, sweep);
}

//const tA = (a,b,c) => {}
function triangleArea(a, b, c) {
  let s = (a + b + c) / 2;
  s = s * ((s - a) * (s - b) * (s - c));
  const calcArea = Math.sqrt(s);
  return calcArea;
}

function roofVolume(sweep, width, depth) {
  const tA = triangleArea(sweep, sweep, width) * depth;
  return tA;
}

function livingVolume(width, height, depth) {
  const total = width * height * depth;
  return total;
}

function houseVolume(width, depth, height, sweep) {
  const lv = livingVolume(width, height, depth);
  const rF = roofVolume(sweep, width, depth);
  return lv + rF;
}

//const callingPrompt = callPrompt();
const volumeOfHouse = callPrompt();
console.log(`House Volume: ` + volumeOfHouse);