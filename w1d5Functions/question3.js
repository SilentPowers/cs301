"use strict";
const prompt = require('prompt-sync')();

const depth = +prompt("Enter depth: ");
const width = +prompt("Enter width: ");
const height = +prompt("Enter height: ");
const sweep = +prompt("Enter sweep: ");

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

function triangleArea(a,b,c){
  let s = (a + b + c) /2;
  s = (s-a) * (s-b) * (s-c);
  const calcArea = Math.sqrt(s);
  return calcArea;
}

function roofVolume(area, depth){
const volume = area * depth;
return volume;
}

function livingVolume(width, height, depth){
  const total = width * height * depth;
  return total;
}

function houseVolume(){
 const totalVolume = livingVolume(width, height, depth)
  + roofVolume(triangleArea(6,10,6), depth);
 return totalVolume;
}

const volumeOfHouse = houseVolume();
console.log(`House Volume: `+ volumeOfHouse);