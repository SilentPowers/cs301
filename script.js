"use strict";
/*eslint-disable*/
// Data needed for a later exercise
//const flights =
// "Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }

};

//////////////////////////////////////////
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


for(const [key, value] of game.scored.entries()){
  //console.log(`Goal ${key + 1} : ${value}`);
}

let sum = 0;

for(const [team, num] of Object.entries(game.odds)){
 console.log(team === 'x' ? `Odd of draw  ${num}`
 : `Odd of victory ${game[team]} ${num}`);
 
}
//////////////////////////////////////////

//Destructuring assignment
//const [first, second] = restaurant.categories;

const [first, , second] = restaurant.categories;

const [start, main] = restaurant.order(2, 0);
//console.log(start, main);

// Nested arrays
const nested = [2, 4, [5, 6]];
const [one, , [two, three]] = nested;
//console.log(one, two, three);

// default values
const array = [9.43, 454.34]
const [p = 1, q = 1, r = 1] = array;
//console.log(p, q, r);

// mutating array elements
let [mainCourse, desert] = restaurant.mainMenu;
[mainCourse, desert] = [desert, mainCourse];

// Destructuring objects
const { name = [], categories, openingHours: hours } = restaurant;
//console.log(name, categories, hours);

// mutating object elements
let a = 876876, b = 77689;
const obj = { a: 2, b: 55, c: 93 };
({ a, b } = obj);
//console.log(a,b);

// Nested objects
const { fri: { open, close } } = restaurant.openingHours;
//console.log(open, close);

//looping through object property NAMES
for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}

//looping through obejct property VALUES
//Object.values(restaurant.openingHours)

//looping through entire object of VALUES AND PROPERTY NAMES
//Object.entries(restaurant.openingHours);
for (const [key, { open, close }] of Object.entries(restaurant.openingHours)) {
console.log(`${key} we open at ${open} and close at ${close}`)
}