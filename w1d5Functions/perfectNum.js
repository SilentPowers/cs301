/*
Write a defining table and JavaScript program to check whether a number is Perfect number or
not?
Perfect number is a positive integer which is equal to the sum of its proper positive divisors.
For example: 6 is the first perfect number
Proper divisors of 6 are 1, 2, 3
Sum of its proper divisors = 1 + 2 + 3 = 6.
Hence 6 is a perfect numb

Initial a sum to 1 cause 1 always a divisor
 Loop from 2 to the number – 1
In the loop check if the index is a factor ie number % index ===0
 If so add to sum
 Finally check to see if sum === number then perfec

*/