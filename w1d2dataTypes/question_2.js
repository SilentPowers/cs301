"use-strict";
//conversion factor
const num = 0.621371

const prompt = require("prompt-sync")(); 

let km = prompt("Enter km: ");
km = Number(km);

const miles = km * num;

console.log(miles);