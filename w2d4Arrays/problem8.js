"use strict";

/*
Write a function that takes an 
array of strings and returns array of palindrome strings only.
*/

/**
 * 
 * @param {array} strings array
 * @returns{array} arary of strings 
 * process: get first element of array, get first and last letter, compare first and last, if
 *  true then compare the next two until all letters have been compared. If false at anytime,
 * then not a palindrome
 * trure
 */
function filterPalindromes(strings) {
  let words = "";
  let i;
  for(const word of strings){
    i = word.length;
    console.log(i);
    const first = word[i];
  
    console.log("f" + first);

  }
    //const last = word[];
  //  console.log("" + last);
  //   for (let j = strings.length-1; j > i; j--){
  //   const last = word[j];
  //   console.log("l" + last);
  // }
  
}



filterPalindromes(["not", "a", "kayak", "eagle", "racecar"]);