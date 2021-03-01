/*

Write a defining table and JavaScript function named 
secondSmallest that accepts three integer numbers as parameters and return 
the second-smallest value among them.
For e.g. secondSmallest(-1,9,7) → 7
*/

function secondSmallest(a,b,c){

  if(a > b){
   return a > c ? 'a' : 'c';
  }
  else if(b > c){
    return c > a ? 'c' : 'b'
  }
return 'c';
}

console.log(secondSmallest(4,5,7));