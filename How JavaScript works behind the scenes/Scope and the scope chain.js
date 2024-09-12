/*    

Scope and the scope chain 
--------------------------
--> Each execution context has a variable enviornment, a scope chain and a this keyword.

Scoping
-------
--> Scoping controls how your program's variables are organized and accessed by the Javascript engine. So,
basically scoping asks the question, where do variables live? or where can we access a certain variable and 
where not?

Lexical scoping
---------------
--> In javascript we have something called lexical scoping and lexical scoping means that the way varibales 
are organized and accessed is entirely controlled by the placement of functions and of blocks in the programs 
code. For example, a function that is written inside another function has access to the variables of the parent
function. Variable scoping is influenced by where exactly we write our functions and code blocks.

Scope
----
--> space or enviornment in which a certain variable is declared. In case of functions that's essentially the 
variable enviornment which is stored in the functions execution context.

What is the difference between scope and variable enviornment?
--------------------------------------------------------------
--> For the case of functions it's basically the same.


--> In javascript we have the global scope, function scope and block scope.

Scope of a variable
-------------------
--> The scope of a variable is basically the entire region of our code, where 
a certain variable can be accessed.

The 3 types of scope
--------------------
Global scope
-------------
--> Global scope is for top-level code. So this is for variables that are declared outside 
of any function or block. These variables are accessible everywhere inside in our program, 
in all functions and all blocks.

Example:

const me="Rehman Ali";
const job="software engineer";
const year= 2000;

Function scope
--------------
--> Each and every function creates a scope and the variables declared inside that function scope 
are only accessible inside that function. This is also called a local scope opposed to the global scope.
So local variables live in the function. And ouside of the function the variables are then not accessible 
at all. This is technically the same as the functions variable enviornment.

Example:

function calcAge(birthYear){
const now=2024;
const age= now - birthYear;
return age;
}
console.log(now) // ReferenceError

--> Outside of the function as we try to log it to the console, we get
a reference error. So javascript is trying to find the "now" variable 
in this global scope, so outside of the function, but it cannot find it.
And so there this gonna be an error.

--> It actually does not matter what kind of function we're using. So
function declarations, function expressions and arrow functions all create
their own scope.

Block Scope(ES6)
--------------

--> Now traditionally only functions used to create scopes in Javascript. But 
starting in ES6, blocks also creates scopes now. And with blocks, we mean everything
that is between curly braces, such as the block of an if statement or a for loop. So
just like with functions, variable declared inside a block only accessible inside that
block and not outside of it.

--> The big difference is that block scopes only apply to variables declared with let or const.
Only let and const variables are restricted to the block in which they were created. That's why 
we say that let and const variables are block scoped. So if i declared a variable using "var" in 
this block, then that variable would actually still be accessible outside of the block and would 
be scoped to the current function or to the global scope and so we say that "var" is function
scoped. 

--> So in ES5 and before, we only had global scope and function scope. And that's why ES5 variables
declared with "var" only care about functions, but not about blocks. They simply ignore them. Finally,
also starting in ES6 all functions are now also block scoped, at least in strict mode. And just like with
let and const variables, this means that functions declared inside a block are only accessible inside that
block.

--> let and const variables as well as functions are block scoped.

Example:

if(year>=1981 && year<=1996){
const millenial=true;
const food= "Avocado toast";

} <-- Example: if block, for loop block, etc.
 
console.log(millenial); // ReferenceError

The scope chain
----------------
Example:

const myName="Rehman Ali";

function first(){
const age=24;

if(age>=30){
const decade=3;
var millenial =true;

}

function second(){
const job="Software Engineer";

console.log(`${myName} is a ${age}-old ${job}`)

}

second();

}

first();

--> we start the global scope as you can see, the myName varibale declaration and "first" function declaration is we have
in the global scope. Inside the global scope we have a scope for the "first" function because each function creates its own
scope and contains age variable that is declared right at the top of the function. Next inside the "first" function scope, let's
now consider the "second" function which will also create its own scope containing the job variable set to teacher. As you can see
we have a nested structure of scopes with one scope inside the other. In the second function, we have the line of code where we need
the myName variable and the age variable, which are both not declared inside the current scope. But we really need these variables here 
because otherwise we can't create the string. How will the javascript engine know the values of these variables?. Well, the secret is that 
every scope always has access to all the variables from all its outer scopes. So from all its parent scopes. In our example, this means that
the second scope can access the age variable from the scope of the first function. This also means that the first scope can access variables
that are in the global scope because that is the parent scope. As a consequence of this, the second scope will then also be able to access the 
myName variable from the global scope, because it has access to the variables from the first scope. And all this also applies to function arguments.
And this is essentially how the scope chain works. In other words, if one scope needs to use a certain variable, but cannot find it in the current scope,
it will look up in the scope chain and see if it can find a variable in one of the parent scopes. If it can, it will then use that variable. And if it can't 
then there will be an error. And this process is called variable look-up. These variables are not copied from one scope to another, Instead, scopes simply look-up 
in the scope chain until they find a variable that they need and then they use it. It does not work the other wat around. A ceratin scope wil never, ever have 
access to the variables of an inner scope. In the above example, the first scope, for example, will never get access to the job variable that is stored in the second
scope. One scope can only look up in a scope chain but it cannot look down basically. So only parent scopes can be used but no child scopes. The line of code will be
execute and print to the console "Rehman Ali is a 24 year old software Engineer" even though "myName" and "age" variables were not defined in the current scope. All the
engine did was to get them from the scope chain. Starting with ES6 not only function create scopes, but also blocks. However, these scopes only work for the ES6 variable 
types so for let and const variables. That's why the only variable that's in the scope is the decade variable. The millenial variable isn't declared with const or let and
therefore it is not scoped to just this block.

*/
