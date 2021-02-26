'use strict';

// 1
// 12
// 123
// 1234
// 12345

for(let i = 1; i<=5; i++){
  let row = '';
  for(let j = 1; j<=i; j++){
    row = row + j;
  }
  console.log(row + "\t");
}


// 1
// 22
// 333
// 4444
// 55555