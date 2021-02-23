//v = pie * r^2 * h

const prompt = require('prompt-sync')();

const radius = prompt("Enter radius of cylinder: ")
const height = prompt("Enter height of cylinder: ")

let volume = Number(Math.PI * Math.sqrt(radius) * height);

console.log(volume.toFixed(2));

