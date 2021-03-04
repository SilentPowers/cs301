"use strict";
// a = b * q + remainder
//num1 = num2 * someNumber + remainder
// 75 = 60 * 1 + 15
//r = number1%number2;
//(60,15)
//60 = 15 * 4 + 0
//(15,0)
//GCF = 15

const greatestCommonDivisor = function (num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  else {
    let remainder = num1 % num2;
    return greatestCommonDivisor(num2, remainder);
  }
};

const leastCommonMultiple = function (a, b) {
  return a * b / greatestCommonDivisor(a, b);
};

//console.log("LCM: " + leastCommonMultiple(18, 12));
console.log("GCD: " + greatestCommonDivisor(18,12));


