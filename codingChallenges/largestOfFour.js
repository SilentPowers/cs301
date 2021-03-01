const largest = function (array) {
  var maxes = [];
  for (let i = 0; i < array.length; i++) {
    //every time the outer loop loops, reset max to the first element of inner array
    let max = array[i][0]
    for (let j = 0; j < array[i].length; j++) {
      let current = array[i][j];
      if (max < current) {
        max = current;
      }
      
    }
    maxes.push(max);
  }
  return maxes;
}


console.log(largest([[3, 5, 6], [5, 9, 2], [9, 4, 1], [10, 5, 7]]));