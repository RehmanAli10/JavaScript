/*                    
A closure is not a feature that we explicitly use. So we dont't create closures manually like we create a new array or a new function. So a closure simply happens automatically in certain situations, we just need to recognize those situations. 
now lets break down the code and see what's happen behind the scenes. Before we start running the secureBooking function our code is running in the global execution context in there we have only secureBooking function and we can also say that the 
global scope now contains secureBooking. Then when a secureBooking function is executed a new execution context is being put on top of call stack. Now remember, each execution context has variable enviornment, which contains all its local variables. In 
this case it only contains the passengerCount set to zero. This variable enviornment is also the scope of this function so the scope chain of this execution context looks like this:

-------------------
Global Scope
-------------------
secureBooking = <f>
booker=<f>
--------------------
    ^
    |
    |
    |
    |
----------------------
secureBooking() scope
----------------------

passengerCount=0
----------------------
secureBooking=<f>
booker=<f>
----------------------

so the passengerCount is in local scope but ofcourse this scope also get access to all the variables fo parent scope and in this case just a global scope. In the next line of secureBooking function a new function 
is returned and it will be stored in the booker variable so the global context now also contains the booker variable. Now what else happens when the secure booking function returns? its execution context pops off the 
stack and disappears. so the securebooking function has done its job and has now finished execution. It's really is gone now and that;s important to be aware of and to keep in mind.

Q: How can the booker function update the passengerCount variable that's defined in secureBooking function that actually has already finished executing. The secureBooking function has already finished its execution so it is gone. So its 
execution context is no longer on the stack but still ths inner function here which is the booker function is still able to access the passengerCount variable that is inside the booker function that should no longer exist?

Ans: what makes this possible is closure. The booker function here is simply a function that exists out here in the global enviornment or in the global scope and the enviornment in which function was created it was basically securBooking function enviornment is 
no longer active it is infact gone but still the booker function somehow continues to have access to the variables that were present at the time that the function was created and in particular, the passengerCount variable and so that's exactly what the closure does.
So we can say that a closuer makes a function remember all the variables that existed at the functions birthplace. So we can imagine the secureBooking as being the birthplace of the function which is being returned from it (booker function). So the booker function remember everything 
at its birthplace by the time it was created. 

How closure works
---------------
booker is the same function which is located in global scope also. when booker function is called first thing thats gonna happen is a new excution context is gonna be created and put on top of call stack and the variable enviornment of this context is empty simply because there are no variables declared 
in this function now what about the scope chain? well since booker is in the global execution context its simply a child's scope of the global scope. So, how did the booker function access the passengerCount variable? as it is no where to be found in the scope chain so this where we start to unvail the secret of the 
closure and the secret is basically this any function always has access to the variable enviornment of the execution context in which the function was created. Now in the case of booker this function was created. It was born in the execution context of secureBooking, which was popped of the stack previously. So, therefore the 
the booker function will get access to this variable enviornemnt which contains the passengerCount variable. And this is how the function will be able to read and manipulate passengerCountVariable. So it is this connection that we call closure.

--> So a function always has access to the variable enviornment of the execution context in which it was created, even after that execution context is gone.

--> So the booker function has access to the passengerCount variable becuase its basically defined in the scope in which the booker function was actually created. So, in a sense the scope chain is actually preserved through the closure, even when a scope has already been destroyed becuase the execution context is gone. This means that 
even though the execution context has actually been destroyed, the variable enviornment somehow keeps living somewhere in the engine.

--> We can also say that thanks to the closure a function does not lose connection to variables that are existed at the function birthplace.

--> Note: Closure have priority over scope chain.

Closures Summary
---------------
--> Closure is the closed over variable enviornment of the execution context in which a function was created even after the execution context is gone.

--> A closure gives a function access to all the variables of its parent function. So the function in which it is defined even after that parent function has returned. So the function kees the refrence to outer scope even after that outer scope is gone which basically preserves the scope chain throughout time.

--> A closure makes sure that a function does never lose connection to the variables that existed at the functions birthplace. It remembers the variable even after the birthplace is gone. It's like a person who doesn't lose connection to their hometown. In this analogy person is the function and the hometown is the function parents scope, and the function then 
doesn't lose the connection to the variables stored in this parent's scope. 

--> A closure is like a backpack so in this analogy, a function has a backpack which it carries around wherever it goes. And this backpack contains all the variables that were present in the enviornment in which the function was created. Then whenever a variable can't be found in the function scope, javascript will look in to the backpack and take the missing variables 
from there.

--> we can took a look in to closures using console.dir() e.g console.dir(booker)

*/

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

///////////////////////////////////////////////////////////
/*   
Closure Examples
---------------
--> These example are gonna demonstrate that we dont't need to return a function from another function in order to create a closure. 

--> Example 1: So whenever something like this happens where you reassigned functions even without returning them, keep in mind that also this will create a closure.

--> Example 2: Closure even have priority over scope chain
*/
/////////////////////////////////////////////////////////

// Example 1:
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Re-assigning f function
// h();
// f();
// console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`There are three groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
boardPassengers(180, 3);
