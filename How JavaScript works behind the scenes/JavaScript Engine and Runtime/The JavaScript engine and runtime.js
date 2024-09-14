/*
What is a JavaScript Engine?
----------------------------
--> A javascript engine is simply a computer program that executes javascript code there are a lot of steps involved in doing that
 but essentially executing javascript code is what an engine does.

--> Every browser has its own javascript engine but probably the most well known engine is Google's V-Eight. The V-Eight engine powers 
google chrome but also Node.js which is the JavaScript runtime that we can use to build server side applications with Javascript, so 
ouside of any browser. All the other browser have their own JavaScript engines.

--> Any Javascript engine always contains a call-stack and a heap. The call-stack is where our code is actually executed using something called 
execution contexts. Then the heap is an unstructured memory pool which stores all the objects that our application needs.

How the code is compiled to machine code so that it actually can be executed afterwards?
----------------------------------------------------------------------------------------
--> Compilation vs Interpretation
    --> In compilation the entire source code is converted into machine code at once. And this machine code is then written in to a portabale file
    that can be executed on any computer. so we have two different steps here:

    1- The machine code is built and then it is executed in the CPU so in the processor. And the execution can happen way after the compilation. For example,
    any application that you're using on your computer right now has been compiled before and you're now executing it way after it's compilation 

    --> In interpretation there is an interpreter which runs through the source code and executes it line by line. so here we do not have the same two steps as before. Instead the code
    is read and executed all at the same time. The source code still needs to be converted in to machine code but it simply happens right before it's executed and not a head of time.
    
--> Now Javascript used to be a purely interpreted language but problem with interpreted languages is that they are much, much slower than compiled languages. 

--> Instead of simple interpretation modern javascript now use a mix between compilation and interpretation which is called just-in-time compilation. This approach basically 
compiles the entire code in to machine code at once and then executes it right away. so we still have the two steps of regular a head of time compilation but their is no portable 
file to execute. And the execution happens immediately after a compilation.

How this works particularly in case of javascript?
--> A piece of javscript code enters the javascript engine the first step is to parse the code which essentially means to read the code. During the parsing process, the code is parsed in to 
a data-structure called abstract syntax tree or AST. This works by first splitting up each line of code in to pieces that are meaningful to the language like const or function keywords, and
then saving all the these pieces in to the tree in a structured way. This step also checks if there are any syntax errors and the resulting tree will later be used to generate the machine code.

--> The next step is compilation which takes the generated AST and compiles it into machine code. This machine code then gets executed right away because modern javascript engine use just-in-time compilation. And
execution happens in the javascript engines call-stack.

--> Modern javscript engines have some pretty clever optimization startegies. What they do is to create a very unoptimized version of machine code in the beginning just so that it can start executing as fast as possible. 
Then in the background this code is being optimized and recompiled during the already running program execution. And this can be done most of the times after each optimization the unoptimized code is simply swept for the 
new more optimized code without ever stopping execution. And this process is what makes modern engines such as V-Eight so fast and all this parsing, compilation and optimization happens in some special threads inside the engine
that we cannot access from our code. So completely separate from the main thread that is basically running into call-stack executing our own code.

--> Different engines implements this in slightly different ways. In a nutshell this what modern just-in-time compilation looks like for javascript. 


--> AST is just the representation of our entire code inside the engine.

--> AST has nothing to do with DOM tree.

JavaScript RunTime / Js RunTime in the browser
----------------------------------------------
--> We can imagine a javascript engine runtime as a big box or a big container which includes all the things 
that we need in order to use javascript in this case, in the browser. And the heart of an javascript runtime is 
always a javascript engine without an engine there is no runtime and there is no javascript at all. However the engine
alone is not enough. In order to work properly we also need access to the web APIs, so that's everything related to the
DOM or timers or even the console.log() that we use all the time. So essentially web API's are functionalitis provided
to the engine, but which are actually not part of the Javascript language itself. Javacript simply get access to these APIs
through the global window object. But it still makes sense that the Web API's are also part of the runtime, because again 
runtime is just like a box that contains all the Javascript related stuff that we need. Next a typical javascript runtime
also includes a so called callback queue. This is a data structure that contains all the callback functions that are ready
to be executed. For example we attach event handler functions to DOM elements like a button to react to certain events. And these
event hadler functions are also called callback functions. so as the event happens for exampe a click, the callback function will
be called. And here is how that actually works behind the scenes. so the first thing that actually happens after the event is that 
the callback function is put in to the callback queue then when the call-stack is empty the callback function is passed to the stack 
so that it can be executed. And this happens by something called the event loop. So basically the event loop takes the callback functions
from the callback queue and puts them in the callstack so that they can be executed. The event loop is javascript non-blocking concurrency model.

--> Javscript can exist ouside of browsers for example Node.js.  


*/
