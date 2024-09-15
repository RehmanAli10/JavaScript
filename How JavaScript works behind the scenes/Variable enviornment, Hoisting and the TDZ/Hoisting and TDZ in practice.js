/*  Hoisting and TDZ in practice  */

/*Hoisting with variables */

console.log(me); // It results in undefined because variables declared with var are actually hoisted, but they are hoisted to the value of undefined. And so therefore when try to access them undefined is exactly the result that we get.
// console.log(job); // The origin of reference error is the fact that the job variable is still in the temporal dead zone here at this point. The temporal dead zone of a variable declared with a let or const, starts from the beginning of the current scope so in this case, it's the global scope. So from the beginning of the scope until the point of the code where it is defined.
// console.log(year);

var me = "Rehman Ali";
let job = "software engineer";
const year = 1991;

/* Hoisting with functions*/

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // As the function addExpr is defined with const it is now in a temporal dead zone and therefore we get the reference error message
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

var addExpr = function (a, b) {
  return a + b;
}; // so any variables declared with var will be hoisted and set to undefined. And now this addExpression here is essentially that, it's a variable declared with var and so right now it is undefined. So above we are trying to call undefined basically. wer are doing this undefined(2,3)

var addArrow = (a, b) => a + b;

/* Example for the pitfall of hoisting */
if (!numProducts) deleteShoppingCart(); // Here, numProducts is not 10 it is undefined and that's because of the way hoisting works with var variables. And we know that undedined is also a false value, and so therefore, the "if" block will still execute even though we thought that numProducts is 10, but infact its undefined and so that will also trigger the execution of this if block here.

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted");
}

/*
 What are the best practices and what is the conclusion of all this? 

 --> Don't use var to declare variables. Use const most of the time to declare variables and let, if you really need to change the variable later.
 
 --> In order to write clean code declare variables at the top of each scope. This will make code atleast look a little bit better.

 --> Always declare all your functions first and use them only after the declaration. And this applies to all types of functions, even function declarations,
 which are hoisted. So we could use function declaration before you declare them, but still just don't do that it's just not clean.

*/

/* Small difference between let, const and var    */
var x = 1;
let y = 2;
const z = 3;

console.log(window); // window is the global object of javascript in the browser. So variables declared using let and const do not created properties on the window object.

console.log(x === window.x); // Here we are checking if x variable is actually a property of the window object.

/* 
variables declared with var will create a property on the global window object. And that can have implications in some cases.          
 */
