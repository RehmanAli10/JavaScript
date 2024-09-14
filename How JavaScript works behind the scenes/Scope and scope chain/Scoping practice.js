"use strict";

function calcAge(birthYear) {
  const age = 2024 - birthYear;
  console.log(firstName);
  return age;
}

const firstName = "Rehman Ali";
calcAge(2000);

/* --> This calcAge function here will be defined in a global scope. And that's beacuse it is here in the 
top-level code. Also this function here creates its own scope. And that scope is gonna be equivalent to the
variable enviornment of its execution context.

--> As you see this firstName variable is not actually in this scope of the calcAge function. However, it is a
global variable that we defined out here. And therefore, through the scope chain its gonna be made available also
inside of this calcAge function scope.

*/
