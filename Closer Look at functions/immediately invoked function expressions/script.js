/*Sometimes in javascript we need a function that is only executed once and then never again. So basically a function that disappears right after its called once.

Why was this pattern actually invented?
Ans: we already know that function create scopes and what's important here is that one scope does not have access to variables from an inner scope.Therefore, we say that all data defined inside a scope 
is private. we also say that this data is encapsulated.

--> if what we really need is to execute a function once, then the IIFE pattern is still the way to go.
*/

const runOnce = function () {
  console.log("This will never run again");
};

runOnce();

// immediately invoked function expression (IIFE)
(function () {
  console.log("This will never run again");
})();

(() => console.log("This will never run again"))();
