"use-strict"
//L = US qt x 0.946352946
//conversion factor 
const num = 0.946352946;
const prompt = require('prompt-sync')();
let quarts = prompt("Enter quarts to be converted into liters: ")
quarts = Number(quarts);
const liters = quarts * num;

console.log(liters);