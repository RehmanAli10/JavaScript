/*                    
 Hoisting in javascript
 ----------------------

 --> So, in javascript we have a mechanism called hoisting. And hoisting basically makes some types of variables accessible, or let's say useable in the code before 
 they are actually declared in the code.

 --> Behind the scenes the code is basically scanned for variable declaration before it is executed. So this happens during the so-called creation phase of the execution 
 context. Then for each variable that is found in the code, a new property is created in a variable enviornment object. And that's how hoisting really works.

 --> The hoisting does not work the same for all variable types. 

 --> Let's analyze how the hoisting works for function declarations, variables defined with var, variables defined with let or const, function expressions and also arrow functions.

 Function declarations
 ---------------------
 --> Function declarations are actually hoisted and the initial vaue in the variable enviornment is set to actual function. So in practice, what this means is that we can use function 
 declarations before they are actually declared in the code, again, because they are stored in the variable enviornment object, even before the code starts executing. 
 
 Variables declared with var
 --------------------------
 --> Variables declared with var are also hoisted, but hoisting works in a different way here. So unlike functions, when we try to access a var variable before its declared in a code,
 we don't get the declared value but we get undefined. This is one of the main reasons why in modern javascript we almost never use var.  

 Vriables declared with let and const
 ------------------------------------
 --> let and const variables are not hoisted. Technically, they are actually hoisted but their value is basically set to an un-initialized. So, there is no value to work with at all. And so in practice, it is as if hoisting was not happening at all. Instead we say that these variables are placed 
 in a so called Temporal Dead Zone or TDZ which makes it so that we can't access the variables between the beginning of the scope and the place where the variables are declared. So as a consequence if we attempt to use a let or const variable before its declared, we get an error.
 
 --> let and const are block scoped. So, they only exist in the block in which they were created. And all these factors together is basically the reason why let and const were first introduced in to the language and why we use them instead of var in modern javaScript. 
 
 Function expressions and arrow functions
 ---------------------------------------
 --> It depends if they were created using var, const or let. Because these functions are simply variables. And so they behave the exact same way as variables in regard to hoisting. This means that a function expression or arrow function created with var is hoisted to undefined. But if created with let or const,
 its not usable before it's declared in a code because of temporal dead zone. This the reason why we cannot use function expressions before we write them in the code, unlike function declarations.  

 Temporal Dead Zone, let and const
 ----------------------------------

 Example:
 --------
 const myName= "Rehman Ali";

 if(myName==="Rehman Ali"){
 console.log(`Rehman Ali is a ${job}`)
 const age=2024-2000;
 console.log(age);
 const job="software engineer"
 console.log(x);
 }

--> In the above example code we're gonna look at the job variable. It is a const so it's scoped only to this "if" block and it's gonna be accessible starting from the line where it's defined why? well because there is the temporal dead zone for the job variable. It's basically the region of the scope in which variable is defined, but can't be used in any way.
 So it is as if the variable didn't exist. If we still tried to access the variable while in TDZ like we actually do in the first line of the "if" blcok, then we get a reference error telling us that we can't access job before initialization. However, if we tried to access a variable that was actually never even created, like in the last line of the above code
 where we want to log x then we get a different error message saying that x is not defined at all. What means that job s in fact in the temporal dead zone where it is initialized, but the engine knows that it will eventually be initialized because it already read the code before and set the job variable in the variable enviornment to uninitialized. Then when execution 
 reaches the line where the variable is declared, it is removed from the temporal dead zone and it's then safe to use. Basically, each and every let and const variable get their own temporal dead zone that starts at the beginning of the scope until the line where it is defined. And the variable is only sate to use after the TDZ, so the temporal dead zone.
 
--> What is actually the need for javascript to have a temporal dead zone?
     --> Well, the main reason that the TDZ was introduced in ES6 is that it makes it way easier to avoid and catch errors. Because using a variable that is set to undefined before it is actually declared can cause serious bugs which might be hard to find.
     
--> Accessing variable before declaration is bad practice and should be avoided. And the best way to avoid it is by simply getting an error when we attempt to do so. And that's exactly what a Temporal Dead Zone does. A second and smaller reason why the TDZ exists is to make const variables actually work the way they are supposed to. we can't reassign const variables so it will not
be possible to set them to undefined first and then assign their real value later. const should never be reassigned. And it's only assigned when execution actually reaches the declaration. And that makes it impossible to use the variable before.

--> If hoisitng creates so many problems why does it exist in the first place?
    --> The creator of javascript basically implemented hoisting so that we can use function declarartions before we use them. Because this is essential for some programming techniques, such as mutual recursion. Some people also thinks that makes code a lot more readable. The fact that it also works for var declarations is because that was the only way hoisting could be implemented at the time.
    So, the hoisting of var variables is basically just a byproduct of hoisting functions. And it probably seemed like a good idea to probably set variables to undefined, which in hindsight is not really that great. 

*/

const myName = "Rehman Ali";

if (myName === "Rehman Ali") {
  console.log(`Rehman Ali is a ${job}`);
  const age = 2024 - 2000;
  console.log(age);
  const job = "software engineer";
  console.log(x);
}
