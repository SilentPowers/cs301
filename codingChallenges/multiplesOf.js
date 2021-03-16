"use strict";
//Write a JavaScript program that prints numbers between 10 and 100 that
// are multiple of both 3 and 5
/**
 * 
 */
function multiples(){
  for(let i = 10; i <= 100; i++)
  {
    if(i % 3 === 0 || i % 5 === 0){
      console.log(i);
    }
  }
}

multiples();