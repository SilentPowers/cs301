function getIndexToInts(num, array){

const arr = array.sort(function(a,b){
  return a - b;
})
for(let i = 0; i < arr.length; i++){
  if(num < arr[i]){
    return i;
  }
}
return arr.length;
}

console.log(getIndexToInts(88, [77,40,60]));

