/*        
What is javaScript?
--> javaScript is a high-level, Object-Oriented, Multi-paradigm programming language.
                          
                         OR

 --> javaScript is a high-level, prototype-based, object-oriented, Multi-paradigm, interpreted or just-in-time compiled, dynamic,
 single-threaded, garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model.

Destructuring the above defenition:
1- Hight-level
--> Every program that runs on your computer needs some hardware resources such as memory and the CPU to do its work.
--> There are low-level languages such as C where you have to manually manage these resources for example asking the computer for memory to create a new variable. on the other side you
have high-level languages such as javascript and python where we do not have to manage resources at all because these languages have so called abstractions that take all of that work away from us.
This makes the language easier to learn and to use but the downside is that programs will never be as fast or as optimized as for example, C programs.

2- Garbage-collected
--> One of the powerful tools that takes memory managment away from us developers is garbage collection which is basically an algorithm inside the javascript engine which automatically removes old, unused objects from the computer memory
in order not to clog it up with unnecessary stuff. So it's a little bit like javascript has a cleaning guy who cleans our memory from time to time so we dont have to do it manually in our code.

3- Interpreted or just-in-time compiled
--> javaScript is an interpreted or just-in-time compiled language.
--> computer's processor only understands zeros and ones, that's right. Ultimately, every single program needs to be written in zeroes and ones, which is also called machine code. And since that's not practical to write we simply write human-readable javascript code,
which is an abstraction over machine code but this code eventually needs to be translated to machine code and that step can be either compiling or interpreting. This step is necessary in every single programming language because no one writes machine code manually. In case of
javaScript this happens inside the javaScript engine.

4- Multi-paradigm
--> One of the things that makes javascript so popular is the fact that it's a multi-paradigm language.
--> In programming, paradigm is an approach  and an overall mindset of structuring our code, which will 
ultimately direct the coding style and technique in a project that uses a certain paradigm.
--> Now three popular paradigms are:
1- Procedural programming
--> Procedural programming is just organizing the code in a very linear way, and then with some functions in between.

Example:
--Function to calculate the sum of an array--
function calculateSum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

--Function to calculate the average of an array--
function calculateAverage(numbers) {
    const sumOfNumbers = calculateSum(numbers);
    const countOfNumbers = numbers.length;
    const average = sumOfNumbers / countOfNumbers;
    return average;
}

---Main procedure to run the program--
function main() {
    --Example array of numbers--
    const numbers = [10, 20, 30, 40, 50];
    
    --Calculate the average--
    const average = calculateAverage(numbers);
    
    --Output the result--
    console.log("The average is:", average);
}

--Run the main procedure--
main();

--> we can classify paradigms as imperative or as declarative.
--> Many languages are only procedural, or only object-oriented, or only functional but javascript does all of it.
--> so its really flexible and versatile

2- Object-oriented programming(OOP)
--> It is a prototyp-based, object-oriented approach.
--> Almost everything in javascript is an object, except for primitive values such as numbers, strings etc. But arrays for example are just object.
--> Why we can create an array and then use the push method on it. for example

const arr=[1,2,3];
arr.push(4);
const hasZero= arr.indexOf(0)>-1; 

--> It's because of prototypal inheritance. Basically, we create arrays from an array blueprint, which is like a template and this is called the prototype. This prototype contains all the array methods and the arrays that we create
in our code then inherit the methods from the blueprint so that we can use them on the arrays.

3- Functional programming(FP)
--> javascript is a language with first-class functions, which simply means that functions are treated just as regular variables. So, we can pass functions in to other functions and we can even return functions from functions. And this is extremely powerful because it allows us to use a lot of powerful techniques
 and also allows for functional-programming, which is one of the paradigm.

 Example

 const closeModal=()=>{
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    }
    overlay.addEventListener("click", closeModal);

    --> In above example we pass the closeModal function in to the addEventListener function as if it was just a regular variable.
    --> Not all languages have first-class functions, but javascript has, and it is amazing. 


7- Dynamic
--> Javascript is a dynamic language and dynamic actually means dynamically-typed.
--> In javascript we dont assign data types to variables. Instead, they only became known when the javascript engine executes our code. Also the type of variables can easily be changed as we reassign variables. And this is basically what dynamically-typed means.
--> And same is not true for other programming languages like C, java, and ruby on rails where we have to manually assign types,to variables. And this then usually prevents bugs from happening, which is the reason why many people say that javascript should be a strongly-typed languag as well.    

Example:
let x=23;   // No data type definitions. Types become known at runtime
let y=19;
x="Rehman Ali" // Data type of variable is automatically changed

8- Single-threaded
-->

9- Non-blocking event loop
--> what is concurrency model?
    --> concurrency model means how the javascript engine hanldes muliple tasks happening at the same time.
    
    --> Why do we need that?
      --> Because javascript itself runs in one single-thread which means that it can only do one thing at a time and therefore we need a way 
          of handling multiple things happening at the same time. And by the way in computing thread is like a set of instructions that is executed in the 
          computer's CPU. So basically, thread is where our code is actually executed in a machine's processor.
          
          --> What if there is a long-running task like fetching data from a remote server?
              --> well, it sounds like that would block the single thread where the code is running. But ofcourse we don't want that. what we want is so called non-blocking behavior.
                    
                  --> How do we acheive that?
                      --> By using a so called event loop. The event loop takes the long-running tasks, executes them in the background and then puts them back in the main thread once they are finished. And this is, in a nutshell javaScript's non-blocking event loop concurrency model with a single thread.  


*/
