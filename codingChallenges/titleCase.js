"use strict";
function titleCase(sentence){
let words = sentence.toLowerCase().split(" ");
for(let i = 0; i < words.length; i++){
 words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
console.log(words.join(' '));

}


titleCase("Im a little tea pot")