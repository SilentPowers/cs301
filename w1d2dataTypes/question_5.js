"use-strict";
// When you exercise to strengthen your heart, you should maintain your heart rate within a
// range. To find that range, subtract your age from 220. This difference is your maximum heart
// rate per minute. Your heart simply will not beat faster than this maximum (220 − age). When
// exercising to strengthen your heart, you should keep your heart rate between 65% and 85% of
// your heart’s maximum. Write a JavaScript program that asks for a person’s age and computes
// and outputs the slowest and fastest rates necessary to strengthen his heart.

//get age from user 
//subtract age from 220 to get maxHR 
//calculate slowest rate 65% of maxHR
//calculate fastest rate 85% of maxHR
const slow = .65;
const fast = .85;
const prompt = require('prompt-sync')();
const age = prompt("What is your age? ");
const maxHR = 220 - age;
const slowRate = maxHR * slow;
const fastRate = maxHR * fast;

console.log(`Your max heart rate is ${maxHR}. 65% of your max is ${slowRate} and 85% of your 
max is ${fastRate}`);
