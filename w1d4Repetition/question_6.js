'use strict';

// 1
// 12
// 123
// 1234
// 12345

for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row = row + j;
  }
  console.log(row + "\t");
}

// 1
// 22
// 333
// 4444
// 55555

for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row = row + i;
  }
  console.log(row + "\t");
}




// 55555
// 4444
// 333
// 22
// 1

for (let i = 5; i >= 0; i--) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row = row + i;
  }
  console.log(row + "\t");
}
