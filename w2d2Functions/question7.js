"use strict";

/*
Write a function compute, that takes three parameters. First parameter is a call back
function that does the actual operation, second and third are the operands.
For e.g., compute (add, 2,3) should return 5
- Write compute function as a function expression.
- Write add function as a function expression and call compute passing add as a
callback.
- Refactor to pass add logic as an anonymous function. (Make a copy
first)
- Refactor to pass add logic as an arrow function. (Make a copy first)
*/
//callback fcn
const add = function(a, b){
  return a + b;
};
//high order fcn because it receives another fcn
// const compute = function (fn,a,b){
//   console.log(fn.name);
//   return fn(a,b);
// }
const compute = (fcn, a, b) => {
  return fcn(a,b);
};

console.log(compute(add,5,6));