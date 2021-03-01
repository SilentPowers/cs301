'use strict';

//Write a program that asks for users age and prints "Happy bday" based on age, 
//if user enters 5, program prints "happy day" five times

function happyBday(years){
  for(let i = 0; i < years; i++){
    console.log("happy birthday!")
  }
  return years;
}
happyBday(6);


