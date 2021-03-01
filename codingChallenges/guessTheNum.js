"use strict";
const prompt = require('prompt-sync')();

/*
Write a defining table and JavaScript program that asks user to guess a number between 
1 and 10 until the user enters 5.
 Program also keeps track of number of attempts user made before guessing the correct
  number that is 5.
  Program should output following results based on the attempts made:
1. If user guessed 5 in first attempt, program should print "Awesome!"
2. If user guessed 5 in second attempt, program should print "Great!"
3. If user guessed 5 in third attempt, program should print "Not bad!"
4. Otherwise, program should print "It took you n attempts!", where n is the number of
attempts user made before guessing the correct answer.

input: a number between 1 and 10
output: 1,2,3,4
process:
 compare input with 5, 
keep asking user for input if wrong, 
use a while loop to keep asking user
nested if statement for correct input
counter varible to keep track of guesses
if counter = 0 then answered on first try


*/


function guessNum(){
let input = +prompt("Enter a number between 1 and 10: ")
let numOfGuesses = 1;

//just keep asking until correct input
while(input !== 5){
  input = +prompt("Enter a number between 1 and 10: ");
  numOfGuesses ++;
}

if(input === 5){
if(numOfGuesses === 1){
  console.log('Awesome!')
}
else if(numOfGuesses === 2){
  console.log('Great!')
}
else if(numOfGuesses === 3){
  console.log('Not bad!')
}
else{
  console.log(`it took you ${numOfGuesses} times!`)
}
}
}
guessNum();