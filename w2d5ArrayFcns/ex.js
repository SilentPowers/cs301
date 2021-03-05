"use strict";
const myArray = ["Sam", "am", "i"];
const invertArray = myArray.reverse();


console.log(invertArray.join(" "));



const array = [34,33,44,456,123];
array.splice(2,4);
//console.log(array);

const newArr = array.slice();
const newArr2 = [...array];
console.log(newArr);
console.log(newArr2);