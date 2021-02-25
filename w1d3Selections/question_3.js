"use strict"

// Cost of House                  Down Payment
// $0 to less than 50K           5% of the cost
// $50K to less than 100K       $1000 + 10% of (cost - $50K)
// $100K to less than 200K       $2000 + 15% of (cost - $100K)
// $200K and above              $5000 + 10% of (cost - $200K)

const prompt = require('prompt-sync')();
const costOfHouse = +prompt("Enter price of your home: ")
let downPayment = 0;
if(costOfHouse < 50000){
downPayment = costOfHouse * .05;
}
else if(costOfHouse >= 50000 && costOfHouse < 100000){
downPayment = (costOfHouse - 50000)
downPayment = (downPayment * .10) + 1000;
}
else if(costOfHouse >= 100000 && costOfHouse < 200000){
  downPayment = (costOfHouse - 100000)
  downPayment = (downPayment * .15) + 2000;
}
else {
  downPayment = (costOfHouse - 200000)
  downPayment = (downPayment * .10) + 5000;
}
console.log(downPayment);