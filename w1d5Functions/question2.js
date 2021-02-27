"use strict";

const prompt = require('prompt-sync')();
const inputRadiusOfCircle = +prompt("Enter the radius of the circle: ")
const inputHeightOfCylinder = +prompt("Enter the height of the cylinder: ")
const inputRadiusOfCylinder = +prompt("Enter radius of cyliner: ")
/*
volumeOfCylinder
a. Write a function, areaOfCircle, that computes and returns area of a circle based on the
value of input radius.
b. Write a function, volumeOfCylinder, that compute volume of a cylinder and making use
of the areaOfCircle function.
c. Write code to call and test your function
volume of cylinder =	pi × radius2 × height
area of circle =	pi × radius2
*/

function volumeOfCylinder(height, radius){
  const volume = areaOfCircle(radius) * height;
  return volume;
}

function areaOfCircle(radius){
  const area = Math.PI * Math.sqrt (radius)
  return area;
}

console.log(areaOfCircle(inputRadiusOfCircle));
console.log(volumeOfCylinder(inputHeightOfCylinder, inputRadiusOfCylinder));



