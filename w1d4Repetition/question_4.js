/*
 Write a defining table and JavaScript program to Display Fibonacci series up to N terms. N
being positive integer from user input.
The Fibonacci series is a sequence such that each number is the sum of the two preceding ones,
starting from 0 and 1. That is, fib(0) = 0, fib(1) = 1, fib(n) = fib(n – 1) + fib(n – 2) for n > 1.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,

Input: the number to represent the Nth term
Process: Initialize empty array
        fill in first two elements of array with 0,1
        calculate fib[i] = fib[i-2] + fib[i-1];
Output: the sequence up to Nth term        



*/
const prompt = require('prompt-sync')();
const number = prompt("Enter a number")

  let i;
  let fib = [];
  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= number; i++) {
    // Next fibonacci number = previous + one before previous
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
  }


