'use strict';

function reverse(number) {
  let reversedNum = 0;
  while (number > 0) {
    const digit = number % 10;  // gets last digit
    number = Math.floor(number / 10);  //gets first digit
    reversedNum = (reversedNum * 10) + digit; //accumulates and multiplies to get number in reverse

  }
  //console.log(isPrime(reversedNum));
  return isPrime(reversedNum);
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 2;
}
console.log(reverse(32));


