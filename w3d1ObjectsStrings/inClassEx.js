  "use strict";
  
  const sam1 = 
  {name: "Sam", age: 10};

  const sam2 = 
  {name: "Sam", age: 10};

  const john =
   {name: "John", age: 10};


   const isPersonEqual = function(obj1, obj2){

    const returnBoolName = obj1.name === obj2.name ?  true :  false;
    const returnBoolAge = obj1.age === obj2.age ?  true :  false;

    return returnBoolAge;
   };

   console.log(isPersonEqual(sam1, sam2));