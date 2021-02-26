'use strict';
/*
3. Write a JavaScript program that gives the user three tries to guess the 
correct pin of the account. You set the pin as a constant. When correct display “Correct, 
welcome back.” When
incorrect display “Incorrect, try again.”. When run out of tries display 
“Sorry but you have been
locked out.”

*/
const prompt = require('prompt-sync')();
const pin = 6666;
let i = 0;
let pinIn = +prompt('Enter your pin: ');

while (pin !== pinIn) {
  console.log("Incorrect, try again.");
  i++;
  pinIn = +prompt('Enter your pin: ');
  if (i === 2) {
    console.log("Sorry but you have been locked out");
  }
}
if (pin === pinIn) {
  console.log("Correct, welcome back.");
}




