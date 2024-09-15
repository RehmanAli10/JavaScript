/*                
The this keyword
----------------
--> The this keyword or this variable is basically a specially variable that is created for every execution context and therefore any function. 

How the this keyword works
----------------------------
--> In general terms, the "this" keyword, will always take the value of the owner of the funcion in which, the this keyword is used. we also say, that
it points to the owner of that function.

--> The value of the "this" keyword is not static. So, it's not always the same it depends on how the function is actually called. And its value is only assigned when the function is actually called.

Four different ways in which functions can be called:

 1- First way to call a function is as a method. So as a function attached to an object. So when we call a method, the "this" keyword inside that method will simply point to the object on which the method is called,
 or in other words it points to the object that is calling the method.

 Example:
 --------

 const rehman = {
 name:"Rehman Ali",
 year:2000,
 calcAge: function(){
 return 2037-this.year;
 }
 };
 
 rehman.calcAge() // 37

 --> The method here is the calcAge method because it's a function attached to the rehman object. In the last line, we then call the method and as you see inside the method,
 we used the "this" keyword. The value of "this" will rehman in the above example, because that is the object that is calling the method down there. And so then on rehman we 
 can ofcourse access all the properties that it has. And so this.year will become 2000, becuase that's rehman.year as well. So in this case writing rehman.year would have the
 exact same effect as this.year.

 2- Another way call functions is by simply calling them as normal functions. So not as a method and so not attached to any object. In this the "this" keyword, will simply be undefined.
 However, that is only valid for "strict mode". So, if you are not in "strict mode" this will actually point to the global which in case of the browser is the window object. And that
 can be very problematic and this yet another very good reason to always use "strict mode".     

 --> Next we have arrow functions and while arrow functions are not exactly a way of calling functions. It's an important kind of function that we need to consider, because arrow functions
 do not get their own "this" keyword. Instead, if we use the "this" variable in an arrow function, it will simply be the "this" keyword of the surrounding function. So of the parent function
 and in technical terms this is called "lexical this keyword", beacuse it simply gets picked up from the outer lexical scope of the arrow function. 

 --> If a function is called as an event listener, then the "this" keyword will always point to the DOM element that the handler function is attached to.

 --> So the "this" keyword will never point to the function in which we are using it. And the "this" keyword will never point to the variable enviornment of the function. 

 --> There are actually other ways in which we can call a function for example using the new keyword or the call, apply and bind methods.

*/
