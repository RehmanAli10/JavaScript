/*                             

Coding Challenge #2
This is more of a thinking challenge than a coding challenge 🤓
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
 (function () {
 const header = document.querySelector('h1');
 header.style.color = 'red';
 })();
GOOD LUCK �

*/

(function () {
  const header = document.querySelector("h1");
  const body = document.querySelector("body");
  header.style.color = "red";

  body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

/*                      
Explaination what happened above
-------------------------------
1- When the script is loaded the Global Execution Context is created and pushed onto the call stack.
2- The IIFE is encountered and immediately invoked, so a new execution context for the IIFE is created and pushed on to the call stack.
3- Inside the IIFE:
  --> header and body are created as local variables.
  --> The header color is set to read.
  --> addEventListener registers the callback function with the browser Web Apis.
4- The callback function is created inside the IIFE, so it forms a closure and retains access to the header even after the IFFE, finished execution.
5- The IFFE execution context is popped off the call stack, but the call stack has access to the IFFE's lexical enviornment due to closure.
6- When body is clicked:
  --> The browser places the callback in to the task queue.
  --> The event loop checks:
  --> call stack is empty 
  --> Microtask queue is empty 
  --> Then takes the callback from task queue and pushes it on to the call stack.
7- The callback executes and changes the header color to blue

How Broser web APIs maintain internal event?
--> There is not One single Web API per event.
--> The browser (Web APIs) maintains internal event tables/registries that map:
    DOM Element + Event Type --> List of callback functions
So the browser knows which callback belongs to which event on which element.

What happens under the hood?
--> lets take an example:
body.addEventListener("click", cb1);
body.addEventListener("click", cb2);
button.addEventListener("mouseover", cb3);

As we can see there are three event listeners two on body and one on button elements. The browser internally stores something conceptually like this:

Event Registry (inside Web APIs)

body
 └── click
      ├── cb1
      └── cb2

button
 └── mouseover
      └── cb3
Note
---
--> Web APIs are not duplicated 
--> Callbacks are not floating randomly
--> They are stored in event listener lists tied to elements and event types.

Step by step lifecycle with multiple listeners
---------------------------------------------
1- Registration phase (synchronous)
-----------------------------------
element.addEventListener("click", callback);
--> Runs on the call stack.
--> Browser:
     --> Register the call back in its event registry
     --> Associates it with:
         --> the DOM element 
         --> the event type(click,input,etc.)
Note
-----
--> Nothing enters any queue here

2- Event occurs(async):
-----------------------
  user clicks the body:
  --> Browser detects the click
  --> Browser looks up
       body → click → [cb1, cb2]

3- Queueing Phase
-------------------
For each callback:
  --> A task is created 
  --> Tasks are placed in task(macrotask) queue
  --> Order is preserved (FIFO)

  Task Queue:
→ cb1
→ cb2

4- Event loop execution
------------------------
Event loop does:

1- Wait until call stack is empty 
2- Drain microtask queue
3- Take one task from task queue 
4- Push it on to the call stack and execute.
5- Repeat.

important questions answered
-----------------------------
--> Is there one Web API per event?
  Ans: No, one browser event system that manages many events.

--> How does browser no which call back belongs to which event?
   Ans: By maintaining internal listener maps (element + event type)

--> If 10 listeners are attached to the same event?
   Ans: All 10 are queued in registration order

--> Are they executed in parallel?
    Ans: No, javascript is single threaded --> callback runs one at a time
  
Diagram
------

JS Call Stack
     ↑
Event Loop
     ↓
Microtask Queue (Promises)
     ↓
Task Queue (DOM events)
     ↓
Web APIs (event registry)

Summary
---------
The browser web APIs maintain an internal event registry that maps DOM elements and event types to their callbacks, and when an event occurs the browser queues the corresponding callbacks in the task queue for the event loop to execute.
*/
