"use strict";

// Write a program to compute sales commission based on following
// rules:
// • If the salesman is salaried then
// • These is no commission for sales below $300
// • 1% for sales between $300 and $500 (exclusive)
// • 2% for sales above $500
// • If the salesman is not salaried then
// • 2% for sales between $300 and $500 (exclusive)
// • 3% for sales above $500 


const prompt = require('prompt-sync')();
let salaried;
let comission;
const sales = +prompt("Enter sales made: " )
const salary = (prompt("Are you on salary? " )).toLowerCase();
if(salary === 'yes') {salaried = true}
else {salaried = false};

if(salaried){
  if(sales >= 300 && sales <= 500){
    comission = (sales * .01);
  }
  else if(sales > 500){
    comission = (sales * .02);
  }
  else{
    console.log('no commission')
  }

}
else{
  if(sales >= 300 && sales <= 500){
    comission = (sales * .02);
  }
  else if(sales > 500){
    comission = (sales * .03);
  }
}

console.log(`Your comission $${comission}`);