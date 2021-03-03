const connor = {
  firstName: 'Connor',
  lastName: 'Lakour',
  birthYear: 1990,
  job: 'astronaut',
  friends: ['Mike', 'James', 'Alex', 'Sara'],
  pilotLisence: true,

  calcAge: function (currentYear) {
    //adds property to object only when called
    this.age = currentYear - this.birthYear;
    return this.age;

  },
  getSummary: function (){
    return `${this.firstName} is ${this.calcAge(2021)} and he is an ${this.job}
    with ${this.pilotLisence ? 'a' : 'no'} piolt lisence`
  }
};
const prompt = require('prompt-sync')();
//const input = prompt("Enter firstName, lastName, age, or job: ")
//console.log(connor[input]);



// To add new properties
connor.location = "America";
connor['instagram'] = '@mightyaimiam';




//Challenge 1
//"Connor has 4 friends, and his best friend is called Sara"
console.log(connor.firstName + " has " + connor.friends.length + " friends, and his best"
  + " friend is called " + connor.friends[connor.friends.length - 1]);




//Challenge 2
const tips = [];
const totals = [];

const bills = [100,23,45,65,34,77,66,99,293,244];

const calcTip = function(bills){
  return bills > 50 && bills < 300 ? bills * .15 : bills * .20;
};

for(let i = 0; i < bills.length; i++){
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tips[i] + bills[i]);
}
console.log(totals);



