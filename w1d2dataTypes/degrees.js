

let prompt = require('prompt-sync')();
let tempInCelsius = prompt('Eneter value in celsius: ')
let tempInFahrenheit = 9/5*parseFloat(tempInCelsius)+32;
console.log(tempInFahrenheit);

let tempInFah = prompt('Enter value in fahrenheit: ');
let toCelisius = Number((tempInFah-32)/1.8);
console.log(toCelisius.toFixed(2));