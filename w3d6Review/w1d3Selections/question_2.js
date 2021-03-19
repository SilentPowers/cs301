"use strict";
// Write a program that reads from the keyboard a student's name and number of completed
// credits and then outputs the student's name and label on following rules:
// a. "Freshman" if 0<credits<30
// b. "Sophomore" if 30<=credits<60
// c. "Junior" if 60<=credits<90
// d. "Senior" if credits>90

const prompt = require('prompt-sync')();
const name = prompt("Enter name: ")
const credits = prompt("Enter number of credits: ")

if(credits < 30){
  console.log(`${name} is a Freshman`)
}
else if(credits >= 30 && credits < 60){
  console.log(`${name} is a Sophmore`)
}
else if(credits >=60 && credits < 90){
  console.log(`${name} is a Junior`)
}
else {
  console.log(`${name} is a Senior`)
}