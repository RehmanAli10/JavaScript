/*

How is Javacript code executed?
-------------------------------
--> Just suppose that our code was just finished compiling. So the code is now ready to be executed. What happens then, is that a so called global execution context is 
created  for the top- level code. And top-level code is basically code that is not inside any function. In the beginning only the code that is outside of functions will
be executed. Functions should only be executed when they are called.  

--> A global execution context is created for top-level code.

Example:
const name = "Rehman Ali";

const first=()=>{
    let a=1;
    const b=second();
    a=a+b;
    return a;
    };

function second(){
 var c=2;
 return c;
}

--> In above example, the name variable declaration is clearly top-level code and therefore it will be executed in the global execution context.
--> Next we have two functions, one expression and one declaration so these will also be declared so that they can be called later. But the code
inside the functions, will only be executed when the functions are called.

What is an Execution Context?
----------------------------
--> Execution context is an abstract concept. 

--> An enviornment in which a piece of javascript is executed. Its like a box that stores all the necessary information for some code to be executed 
such as local variable or arguments passed in to a function. So, javascript code always run inside an execution context. Let's imagine you order a
at a takeaway. So usually that pizza comes in a box right?. And it might also come with some other stuff that is necessary for you to eat a pizza such
as cutlery or a receipt, so that you can pay for the pizza before eating it. So, in this analogy the pizza is javascript code to be executed, the box is
ofcourse the execution context for our pizza. And that's because eating the pizza happens inside the box which is then the enviornment for eating pizza. The 
box also contains the cutlery and the receipt, which are necessary to eat a pizza or in other word to execute the code.
     
--> Now, in any javascript project, no matter how large it is, there is only ever one global execution context. It's always there as the default context, and its
where top-level code will execute. And speaking of execute now that we have an enviornment where the top-level code can be executed, it finally is executed. And 
there is not a lot to say about the execution itself. It's just the computer CPU processing the machine code that it recived. Once the top-level code is finished,
functions finally start to execute as well.

--> For each and every function call, a new execution context will be created containing all the information that is necessary to run exactly that funtion. And the same goes 
for methods, of course, they are simply functions attached to objects. All these execution contexts together make up the call-stack. Now when all functions are done executing,
the engine will basically keep waiting for callback functions to arrive so that it can execute these. For example, a callback function associated with a click event. And it's the event loop
who provides these new callback functions

What execution is made of ? OR what is inside of execution context?
-------------------------------------------------------------------
--> The first thing that is inside any execution context is a so-called variable enviornment. In this enviornment all our variable and function declarations are stored and there is also a 
special arguments object. This object contains, as the name says all the arguments that were passed in to the function that the current execution context belongs to. Because each function 
gets its own execution context as soon as the function is called. So, basically all the variables that are somehow declared inside a fuction, will end up in its variable enviornment. However,
a function can also access variables outside of the function. And this works because of something called the scope chain. The scope chain basically consists of references to variables that are located
outside of the current function. And to keep track of the scope chain, it is stored in each execution context. Finally, each context also gets a special variable called the "this" keyword.

--> The content of the execution context, so variable enviornment, scope chain and this keyword is generated in a so-called creation phase. which happens right before execution. 

--> Execution context belonging to arrow functions, do not get their arguments keyword, nor do they get the "this" keyword. Baiscally, arrow functions don't have the arguments object and the this keyword. Instead,
they can use the arguments object, and the this keyword from their closest regular function parent.  

--> Imagine there are hundreds of execution contexts for hundred of functions. How will the engine keep track of the order in which functions were called ? And how will it know where it currently is in the execution ?
   
   --> Well, that's where the call-stack finally comes in. And the call-stack together with the memory heap, makes up the javascript engine itself.    
  
What is the call-stack?
--> It's basically a place where execution contexts get stacked on top of each other, in order to keep track of where we are in the programs execution. So, the execution context that is on top of the stack, is the one
that is currently running. And when it's finished running, it will be removed from the stack, and execution will go back to the previous execution context. And using the analogy from before, it is as if you bought pizza
with some friends. Each friend has a pizza box, and then you put the boxes on top of each other, forming a stack, in order to keep track, which pizza belongs to each friend.

--> Javascript has only one thread of execution. And so it can only do one thing at a time. 

--> I like to use the analogy of the call-stack being like a map for the javascript engine. Because the call-stack ensures that the order of execution never gets lost. Just like map does, at least if you use it correctly.

--> when the execution is fininshed and only global execution context remains in the call-stack the program will stay in this state forever until it is eventually really finished. And that only happens like when we close the
browser tab, or the browser window. Only when the program is really finished like this, is when the global execution context is also popped off the stack.  

*/
