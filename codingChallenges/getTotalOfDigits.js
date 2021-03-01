
let total = 0;
function add(num){
//need while loop cuz not sure how many times to loop
while(num > 0){

//get last digit 
const num1 = num % 10;
//add it to a variable that will keep adding 
total += num1;
//need to reduce num by taking out the last digit
num = Math.floor(num / 10);

}
return total;
}

console.log(add(93));