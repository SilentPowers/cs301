'use strict';

const mark = {
  fullName: "Mark Miller",
  mass: 87,
  height: 1.82,
  
  calcBMI: function(){
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
  }

const john = {
fullName: "John Smith",
mass: 92,
height: 1.95,

calcBMI: function(){
  this.bmi = this.mass / this.height ** 2;
  return this.bmi;
}
}

console.log("Marks: " + mark.calcBMI())
console.log("Johns: " + john.calcBMI())
const lowestBMI = john.bmi < mark.bmi ? '"Johns is lower"' : '"Marks is lower"';
console.log(lowestBMI);