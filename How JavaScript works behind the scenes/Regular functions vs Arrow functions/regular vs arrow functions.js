"use strict";

/* Regular vs Arrow functions  */

/* Example 1 */

// var firstName = "Sultan Ahmad";

// const rehman = {
//   firstName: "rehman",
//   birthYear: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.birthYear);
//   }, // this kind of block does not create its own scope. So, this is not a code block. It is an object literal. So it's just a way that we literally define objects.

//   // greet: () => {
//   //   console.log(this);
//   //   console.log(`Hey ${this.firstName}`);
//   // },

//   greet: function () {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// rehman.greet(); // Output: Hey Sultan Ahmad why is that? It is beacuse inside of the greet function the "this" keyword is window. Window is the "this" keyword of the greet arrow function even though greet arrow function was called by rehman object. That rule doesn't apply here because again, it's an arrow function. If we declared variables with var it create properties on the global object. Therefore this.firstName which translates to window.firstName is then Sultan Ahmad.

/*  Function inside of a method */

// Example 2:

const rehman = {
  firstName: "rehman",
  birthYear: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.birthYear);

    // Solution 1
    const self = this; // This can also be called that or self.
    // const isMillenial = function () {
    //   // console.log(this);
    //   console.log(self);
    //   // console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
    //   console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
    // };
    // isMillenial(); // This is just a regular function call. It is a regular function call even though it happens inside of a method. And the rule says that inside a regular function call, the "this" keyword must be undefined. And so there for it is undefined in this function

    const isMillenial = () => {
      console.log(this);
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
    };
    isMillenial();
  },

  // Solution 2
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

rehman.greet();
rehman.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 7);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

/* 
Arguments keyword
-----------------
--> Just like the "this" keyword, the arguments keyword is only available in regular functions. And this can be useful when we need a function to accept more parameters than we actually specified. 
--> arrow function does not get this "arguments" keyword.


*/

/*    
--> Never ever use an arrow function as a method.

--> There are two solutions to the above problem in Example 2. The first solution is to use an extra variable that we usually call "self". So through the scope chain "self" will be equal to "this" value which is rehman object. So self is refrenced, but it's not ofcourse in the scope. And so JavaScript goes up the scope chain in to the parent scope, which is calcAge. This is a way in which we can preserve the "this" keyword. It is a pre ES6 solution.
Now in ES6 we have a more modern and better solution. And that solution is to use an arrow function. And that works because arrow function dont have its own "this" keyword so the isMillenial function will use "this" keyword from its parent scope. And in this case in the parent scope the "this" keyword is rehman object. So basically an arrow function inherits the "this" keyword from the parent scope. 

*/
