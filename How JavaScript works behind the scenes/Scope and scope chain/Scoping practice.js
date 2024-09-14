"use strict";

/*   SCOPING IN PRACTICE  */

/*
  Example 1  
  -----------

  function calcAge(birthYear) {
  const age = 2024 - birthYear;
  console.log(firstName);
  return age;
}

const firstName = "Rehman Ali";
calcAge(2000);

--> This calcAge function here will be defined in a global scope. And that's beacuse it is here in the 
top-level code. Also this function here creates its own scope. And that scope is gonna be equivalent to the
variable enviornment of its execution context.

--> As you see this firstName variable is not actually in this scope of the calcAge function. However, it is a
global variable that we defined out here. And therefore, through the scope chain its gonna be made available also
inside of this calcAge function scope.

--> When this line of code   console.log(firstName) was executed javascript did not find the variables firstName in
the calcAge function scope and so it did a variable lookup, where it looked up in the scope chain to see if it found
the variable there. And indeed, the parent scope of the calcAge function is the global scope. And the first name variable
is in there and therefore javascript could then use that.

Example 2
---------
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}  `;
    console.log(output);
  

  if(birthYear>=1981 && birthYear<=1996){
    var millenial = true; // old pre ES6 variable

    const firstName="sultan";

    output = "NEW OUTPUT!";

    const str = `Oh, and you're a millenial ${firstName}`
    console.log(str)

    function add (a,b){
      return a+b
    }
  }

  console.log(str)// we get an error str is not defined. And that;s because const and let variables are block scoped. So they are available only inside the block in which they were created. 

  console.log(millenial) // Javascript can actually find it. And so that is beacuse of the fact that var variables, so variables declared with the var keyword are function scoped. so they simply ignore the block because, they are not block scoped at all. They're just function scoped. The scope of the millennial variable is the enire function printAge no matter if it was declared inside of a block or not. Because var variables do not care about blocks at all.

  add(2,3) // add is not defined. And so in fact, the scope this add function here is only the block in which it was defined. So in above example we can use add only in its block which is "if" block. Hence, it proves that functions are now in fact, block scoped. But remember that is onyl true for strict mode.

  console.log(output)
} 

  printAge();

  return age;

 
}

const firstName = "Rehman Ali";
calcAge(1991);
// console.log(age) 

--> The engine as it is executing the printAge function is trying to access or is trying to find the age variable in the current scope, however it cannot 
find it there. And therefore it goes to the parent scope, where it will then find the age variable ofcourse. And same is true for the birthYear variable
because for scoping the parameter of a function work just like normal variables. The scope of a variable is the entire region of the code in which the
variable is accessible. For example the scope of the age variable is starting from const age line to till return age, so everywhere here the age variable
is accessible. In calcAge function where age variable is defined and then also in all the child scopes or inner scopes. But ofcourse, age is not accessible 
outside of the calcAge scope. 

*/
