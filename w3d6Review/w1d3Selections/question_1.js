"use strict"
const prompt = require('prompt-sync')();
const input = prompt("Hows the weather today?  Enter: hot, rain or snow ")

if(input === 'hot'){
  console.log('sandals');
}
else if(input === 'rain'){
  console.log('galoshes');
}
else if(input === 'snow'){
  console.log('boots');
}
else{
  console.log('sneakers');
}

