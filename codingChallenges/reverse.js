'use strict';

/**
 * 
 * @param {*} number 
 * @returns 
 */
function reverse(number) {
  let reversedNum = 0;
  while (number > 0) {
    const digit = number % 10;  // gets last digit
    number = Math.floor(number / 10);  //gets first digit
    reversedNum = (reversedNum * 10) + digit; //accumulates and multiplies to get number in reverse

  }
  let bool = isPrime(reversedNum);
  const value = bool === true ? "number is prime" : " number is not prime";
  return [reversedNum,value] ;
}
/**
 * 
 * @param {*} num 
 * @returns 
 */
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 2;
}
console.log(reverse(42));


