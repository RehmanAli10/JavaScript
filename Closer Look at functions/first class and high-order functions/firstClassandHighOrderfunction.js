/*

First-class vs High-order function
----------------------------------
First Class Functions
---------------------
--> Javascript is a language that has first class functions. In technical term means that functions are so called first citizens.
In practice that means that functions are simply treated as values.

Why does javascript work this way?
--> Its simply because functions are really just another type of objects in javascript and since objects are values, functions are values too. since functions are values there is bunch of interesting things that we can do with them 
like storing them in variables or object properties e.g

Example 1 (store functions in variables or properties)
--------------------------------------------------
const add= (a,b)=> a+b;

const counter={
value:23,
inc: function(){this.value++;}
}

Example 2 (Pass functions as argument to other functions)
----------------------------------------------------------
const greet=()=>console.log("Rehman Ali");
btnClose.addEventListener("click",greet);

Example 3 (Return functions from functions)
-----------------------------------------
function sum(a,b){

return function(){
return a+b;
}
}
sum(10,20)

Example 4 (Call methods on functions)
----------------------------------
counter.inc.bind(someOtherObject);

--> The fact that javascript has first class functions make it possible for us to use and write higher order functions.

Higher order functions
----------------------
--> A higher order function is either a function that receives another function as an argument, or a function that returns a new function.

Example 1 (Function that receives another function)
--------------------------------------------------
const greet=()=>console.log("Rehman Ali");
btnClose.addEventListener("click",greet);

--> so here the addEventListener function is the higher order function. And Why?
     --> Well because it receives another function as an input. In this case the greet function. And we usually says that the function that is passed in is a callback function and thats because the 
     callback function will be called later by the higher order function. In this case the addEventListener will call the greet callback later as soon as the click event happens. Its like the greet function 
     saying "Hey there, don't greet me yet, but call me back once you are ready."

Example 2 (Function that returns new function)
---------------------------------------------
function count(){
let counter=0;

return function(){
counter++;
}
}

Summary
-------
--> First class function is just a feature that a programming either has or does not have. All that means is that all functions are vakues. There are nn first class functions in practice.Its just a concept.
There are however higher-order functions in practice which are possible because the language supports first class functions.













*/
