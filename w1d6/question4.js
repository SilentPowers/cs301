"use strict";
// a = b * q + remainder
//num1 = num2 * someNumber + remainder
// 75 = 60 * 1 + 15
//(60,15)
//60 = 15 * 4 + 0
//(15,0)
//GCF = 15
const num1 = 75;
const num2 = 60;
let array1 = [];
let array2 = [];
let remainder;
let someNum;


for(let i = 1; i < num1; i++){
someNum = num2 * i;
if(num1 === num2 * i + remainder){

}
}


const hcf = function(num1, num2){
  // if(num1 !== 0 && num2 !== 0){
  // for(let i = 0; i < num1; i++){
  //   //find the factors
  //   if(num1 % i === 0){
  //     array1.push(i);

  //   }
  // }
  for(let i = 0; i < num1; i++){
    num1 = num2 * i
  }

  for(let j = 0; j < num2; j++){
    if(num2 % j === 0){
      array2.push(j);

    }
  }
  }


  console.log(array1, array2);


hcf(num1, num2);