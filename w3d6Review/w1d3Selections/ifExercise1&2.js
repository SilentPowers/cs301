"use-strict";

const prompt = require('prompt-sync')();
let whatsTheWeatherLike = (prompt("Whats the weather like today? ")).toLowerCase();
if (whatsTheWeatherLike === "rainy") {
  console.log("Get an umbrealla!")
}


const input = +(prompt("Guess the number between 1 and 10: "))

input === 7 ? console.log("Bingo!") : console.log('Try again!');
