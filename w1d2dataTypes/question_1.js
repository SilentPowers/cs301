"use-strict"
//L = US qt x 0.946352946
//conversion factor 
const num = 0.946352946;
const prompt = require('prompt-sync')();
const quarts = prompt("Enter quarts to be converted into liters: ")

const liters = quarts * num;

console.log(liters);