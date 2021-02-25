'use strict';
/*
Input                            Processing                        Output
Type of person                   Match personStatus to correct     loan duration
Number of overdue books          if/else block                      in weeks
                                  Match number of books
                                  to the correct if/else block
*/


const prompt = require('prompt-sync')();
const personStatus = (prompt("Hello make a choice:  " + " a)student " + " b)faculty " + " c)other")).toLowerCase();
const numOfBooksOverDue = +prompt("How many books do you have overdue? ");

if(personStatus === 'a'){
if (numOfBooksOverDue === 0) {
  console.log("You can borrow book for 6 weeks")
} else if (numOfBooksOverDue < 3) {
  console.log("You can borrow book for 4 weeks")
} else {
  console.log("You can borrow book for 2 weeks")
}
}

if(personStatus === 'b'){
if (numOfBooksOverDue === 0) {
  console.log("You can borrow book for 12 weeks")
} else if (numOfBooksOverDue < 3) {
  console.log("You can borrow book for 10 weeks")
} else {
  console.log("You can borrow book for 8 weeks")
}
}

if(personStatus === 'c'){
if (numOfBooksOverDue === 0) {
  console.log("You can borrow book for 4 weeks")
} else if (numOfBooksOverDue < 3) {
  console.log("You can borrow book for 3 weeks")
} else {
  console.log("You can borrow book for 2 weeks")
}
}