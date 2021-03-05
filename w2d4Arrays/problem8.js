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
  const palindromeArray = [];

  for (const word of strings) {
    let words = "";
    for (let i = word.length - 1; i >= 0; i--) {
      words += word[i];
    }
    if (word === words) {
      palindromeArray.push(words);
    }
  }
  return palindromeArray;
}



console.log(filterPalindromes(["not", "a", "kayak", "eagle", "racecar"]));