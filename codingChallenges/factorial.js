function factorial(num){
  let factorialNum = 1;
  for(let i = num; i > 0; i--){
 factorialNum = factorialNum * i;

}
console.log(factorialNum);
}
factorial(100);