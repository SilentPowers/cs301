'use strict';

function printForecast(arr){
  //accumulator variable
  let stringOut = "";
  for(let i = 0; i < arr.length; i++){
    
     stringOut = stringOut + `...${arr[i]}`;
  }
  return stringOut;
}

console.log(printForecast([12,34,33,39]));