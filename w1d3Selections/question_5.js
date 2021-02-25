"use strict";
/*        
    Input                       Processing                      Output
    Childs age                  Compare age and season          Childs bedtime
    Season                      to find correct bedtime
                                based off table below


5 or younger      summer, fall             8:30 PM
                  winter, spring            8:00 PM

6 to 12           summer                   9:30 PM
                 winter, spring, fall       8:30 PM

13 and older     summer                    10:30 PM
                 winter, spring, fall      9:30 PM


*/

const prompt = require('prompt-sync')();

const childsAge = +prompt("What is the child's age? ")
const season = (prompt("Enter season: ")).toLowerCase();

if(childsAge <= 5){
  if(season === 'summer' || season === 'fall'){
    console.log("Bed time is 8:30pm");
  }
  else{
    console.log("Bed time is 8:00pm");
  }
}
else if(childsAge >= 6 && childsAge <= 12){
  if(season === 'summer'){
    console.log("Bed time is 9:30pm");
  }
  else{
    console.log("Bed time is 8:30pm");
  }
}
else{
  if(season === 'summer'){
    console.log("Bed time is 10:30pm");
  }
  else{
    console.log("Bed time is 9:30pm");

  }
}