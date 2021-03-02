/*

Write a defining table and JavaScript function named 
secondSmallest that accepts three integer numbers as parameters and return 
the second-smallest value among them.
For e.g. secondSmallest(-1,9,7) → 7
*/

function secondSmallest(a,b,c){

  if(a > b){
    return b > c ? 'b' : 'c';
   //return a > c ? 'a' : 'c';
  }
  else if(b > c){
    return b > a ? 'a' : 'c';
    //return c > a ? 'c' : 'b'
  }
return 'a';
}

console.log(secondSmallest(3,2,4));