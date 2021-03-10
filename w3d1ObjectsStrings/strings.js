"use strict";

// problem 1
/*
1. Write the code, one line for each action:
a. Create an empty object car
b. Add the property name make with value Toyota
c. Add the property name model with value Camry
d. Print the object
e. Without modifying the code structure of the object, change the value of the model to
RAV4.
f. Print the object
g. Without modifying the code structure of the object, Remove property make from the
object
h. Print the object
*/

const car = {
  make: "Toyota",
  model: "Camry",
};
//console.log(car);
car.model = "RAV4";
//console.log(car);
delete car.make;
//console.log(car);

/////////////////////////////////////////////

// problem 2

const isPersonEqual = function (obj1, obj2) {

  if (obj1.name === obj2.name && obj1.age === obj2.age) {
    return true;
  }
  return false;
};

/////////////////////////////////////////////

// problem 3
/*
 Write the function countProperties(obj) which returns number of
  properties of an object.
*/

/**
 * 
 * @param {*} obj to check for keys
 * @returns {*} i is count of keys in object
 */
function countProperties(obj) {
  let i = 0;
  for (const element in obj) {
    i++;
  }
  return i;
}

/////////////////////////////////////////////

// problem 4
/*
Write a function checkSpam(str) that returns true if str contains
 text "lottery" or "prize", otherwise return false
*/

const checkSpam = function (str) {
  const newStr = str.split(" ");
  let bool = false;
  for (const element of newStr) {
    if (element === "lottery" || element === "prize") {
      bool = true;
    }
  }
  return bool;
};
/////////////////////////////////////////////

// problem 5
/*
Write a function named suffix that returns the common suffix of two strings. For example, the
common suffix of “swimming” and “walking” is “ing”. This function takes two parameters and
returns the common suffix.
*/

const suffix = function (str1, str2) {
  const strArray1 = str1.split("");
  const strArray2 = str2.split("");
  let newArray = [];
  for(let i = 0; i < strArray1.length; i++){
   
    strArray1[i].includes(strArray2[i])
      newArray.push(strArray2[i]);
    
      console.log(strArray2[i]);
  }
  console.log(newArray);

  //console.log(strArray1, strArray2);
};

suffix("jackson", "johnson");







/////////////////////////////////////////////

// problem 6
/*
Write a function named titleCase with one parameter named s. 
This function returns a copy of s
but with the first letter of each word capitalized.
*/

const titleCase = function (s) {
  const newS = s[0].toUpperCase() + s.slice(1);
  return newS;
};

/////////////////////////////////////////////



// problem 7
//	Write the function getAverageAge(users) that gets an array of 
//objects with two properties name and age and returns the average age.
// Use for .. of

const getAverageAge = function (users) {
  let total = 0;
  let sum = 0;
  let count = 0;
  //its an array so must take it out of array first, obj is then one whole object
  for (const obj of users) {
    count++;
    total += obj.age;

    //doing users[age] gives me 0 and 1
    //console.log(users[age]);
  }
  sum = total / count;
  return sum;
};

/////////////////////////////////////////////

//problem 8

// Write a function to return the sum of the first elements of the inner 
//arrays for arrays with the
// following structure. Use a for .. of loop.
// arr = [[1, 2], [3, 4], [5, 6]]
// console.log(sumFirst(arr)); → 9

const sumFirst = function(arr){
  let firstNum = 0;
  for(const element of arr){
     firstNum += element[0];
  }
  return firstNum;
};
sumFirst([[1, 2], [3, 4], [5, 6]]);

/////////////////////////////////////////////
exports.countProperties = countProperties;
exports.isPersonEqual = isPersonEqual;
exports.checkSpam = checkSpam;
exports.titleCase = titleCase;
exports.getAverageAge = getAverageAge;
exports.sumFirst = sumFirst;

