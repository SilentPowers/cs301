

//ask for input of number of boxes
//ask for input of number of boxes he would like in each stack
//divide number of boxes by number of stacks
//last stack cannot be more than what he specifies
//last stack can be less
//take the divided number and use Math.ceil for the next highest number

const prompt = require('prompt-sync')();
const numOfBoxes = prompt("Enter total number of boxes to be stacked: ");
const numofStacks = prompt("Enter number of stacks you want: ");

let totalNumOfStacks = Number(numOfBoxes / numofStacks);
  totalNumOfStacks = Math.ceil(totalNumOfStacks);
console.log(totalNumOfStacks);