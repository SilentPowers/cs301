"use strict";

const power = function (x, n) {
  if (n === 1) {
    return x;
  }
  return x * power(x, n - 1);
};


const countDigits = function (number) {
  let lastNum = number % 10;
  if (number < 1) {
    return lastNum;
  }
  return lastNum + countDigits(Math.floor(number / 10));
};

console.log(countDigits(126));


const reverse = function (string) {
  const lastString = string[string.length-1];
  if(string.length <= 1){
    return lastString;
  }
  const sliced = string.substr(0,string.length-1);
  return lastString + reverse(sliced);
};

exports.reverse = reverse;
exports.power = power;
exports.countDigits = countDigits;