"use strict";

function addFirstLast(num){
let digit;
digit = num % 10;
while(num > 1){
  num = Math.floor(num/10);
}
digit = digit + num;
console.log(digit);
}

addFirstLast(123459);