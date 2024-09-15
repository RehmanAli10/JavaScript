"use strict";

console.log(this);

/* "this keyword" with regular function*/
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(2000); // Inside this regular function call here the "this" keyword will be undefined and that's because we are in strict mode. In sloppy mode, it would be also the global object. with regular function call here simply means a call of function without the function being attached to any object. So with out having owner so to say.

/* "this keyword" with arrow function */
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // the arrow function does not get its own "this" keyword. So, instead the arrow function simply uses the lexical this keyword, which means that it uses the "this" keyword of its parent function or of its parent scope.
};
calcAgeArrow(1991); // Inside this regular function call here the "this" keyword will be undefined and that's because we are in strict mode. In sloppy mode, it would be also the global object. with regular function call here simply means a call of function without the function being attached to any object. So with out having owner so to say.

/* "this keyword" inside of a method */

const rehman = {
  birthYear: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.birthYear);
  },
};
rehman.calcAge(); // when we have a method call, the "this" keyword insight of the method will be the oject that is calling the method. And in this it is rehman object. so rehman here is basically the owner of the method.

const matiltda = {
  birthYear: 2017,
};

matiltda.calcAge = rehman.calcAge; // we copied the calcAge method from the rehman object to the matilda object So this is called the "method borrowing"

matiltda.calcAge(); // In this method call here the "this" keyword does now actually point to matilda. This proves that the this keyword always points to the object that is calling the method. So, here we are calling the method on matilda. And so therefore the "this" keyword will point to matilda, which was the object which called the method.

const f = rehman.calcAge;
console.log(f);
f(); // this f function is regular function call therefore "this keyword" value will be undefined.
