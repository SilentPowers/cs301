"use strict";
const prompt = require('prompt-sync')();


const measureKelvin = function () {
const measurement = {
  type: 'temp',
  unit: 'celsius',
  value: +prompt('Degrees celsius:'),
};
console.table(measurement);

const kelvin = measurement.value + 273;
return kelvin;
};

console.log(measureKelvin());
// console.warn(measureKelvin());
// console.error(measureKelvin());
