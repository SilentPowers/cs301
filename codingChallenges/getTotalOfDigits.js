"use strict";

function add(num){
  let total = 0;
//need while loop cuz not sure how many times to loop
while(num > 0){

//get last digit 
const num1 = num % 10;
//add it to a variable that will keep adding 
//accumulator variable
total += num1;
//need to reduce num by taking out the last digit
num = Math.floor(num / 10); //returns the first digit, if num < 1, returns 0

}
return total;
}

console.log(add(93));