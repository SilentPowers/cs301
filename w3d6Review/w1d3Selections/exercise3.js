"use-strict";

// • Write a program that asks user to enter number between 1 to 5 and
// prints out how the number is spelled.
// • First, write using else if
// • Then, refactor it to use switch

const prompt = require('prompt-sync')();

const input = Number(prompt("Enter a number between 1 - 5: "));

switch(input){
  case 1: 
  console.log('one');
  break;
  case 2:
    console.log('two');
  break;
  case 3:
    console.log('three');
  break;
  case 4:
    console.log('four');
  break;
  case 5:
    console.log('five');
  break;
  default:
    console.log("not a number between one and five");
}



if(input ===1){
  console.log('one');
}
else if(input ===2){
  console.log('two');
}
else if(input ===3){
  console.log('three');
}
else if(input ===4){
  console.log('four');
}
else if(input ===5){
  console.log('five');
}