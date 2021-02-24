"use-strict";

// Write JavaScript program to compute the mileage of a vehicle. Your program should allow the
// user to enter the beginning and ending odometer readings and the number of gallons of gas
// used and should output the mileage in miles per gallon.

//User enters  begOdometer reading
//User enters endOdometer reading
//User enters numOfGallons used
//subtract the enOdometer from the begOdometer
//divide miles by the gallons

const prompt = require('prompt-sync')();
const begOdometer = prompt("Enter beginning odometer: ")
const endOdometer = prompt("Enter ending odometer: ")
const numOfGallons = prompt("Enter number of gallons used: ")

const totalMiles = Number(endOdometer - begOdometer);
const mpg = (totalMiles / numOfGallons);

console.log(`${mpg} mpg`);