"use strict";

const num1 = 60;
const num2 = 75;
let array1 = [];
let array2 = [];

const hcf = function(num1, num2){
  for(let i = 0; i < num1; i++){
    //find the factos
    if(num1 % i === 0){
      array1.push(i);
    }
  }

  for(let j = 0; j < num2; j++){
    if(num2 % j === 0){
      array2.push(j);
    }
  }


  console.log(array1, array2);
}

hcf(num1, num2);