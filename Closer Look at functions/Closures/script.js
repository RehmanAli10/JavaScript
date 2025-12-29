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
closure and the secret is basically this any function always has access vaiables to the variable enviornment of the execution context in which the function was created.    
*/

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
