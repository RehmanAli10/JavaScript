/* Primitives vs Objects (Primitive vs Reference Types) */

/*
 Primitive Example
 ------------------
 --> Primitives are like numbers, strings boolean etc.

 let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

Object Example
--------------
const me = {
  name: "Rehman Ali",
  age: 34,
};

const friend = me;
friend.age = 27;
console.log("Firend", friend);
console.log("Me", me);

Primitives, Object and the javascript engine
---------------------------------------------
--> JavaScript primitive data types are following:
1- Number
2- String
3- Boolean
4- Undefined
5- Null
6- Symbol
7- BigInt

Then everything else are basically objects. So objects created with the object literal, arrays, and even function are all objects.

--> When we're talking about memory and memory management, it's usual to call primitives, primitive types and objects reference types because 
of the different way in which they are stored in memory.

--> The javascript has two components, the call-stack where functions are executed and to heap where objects are stored in memory. All our objects or in other words, reference types 
will get stored in the memory heap. On the other hand, primitives or primitive types are stored in the call-stack. And with that, i mean that primitive types are stored in the execution contexts
in which they are declared. 

Primitive vs Reference values
-----------------------------

Primitive Values example
-------------------------
let age=30;
let oldAge=age;
age=31;
console.log(age);
console.log(oldAge);

--> When we declare a variavle like age equals 30, what actually happens inside the javascript engine and the computer memory?
   --> Wll, first javascript will create a so called unique identifier with the variable name. Then a piece if memory will be allocated with a certain address, 
   so 001 in this example, and finally the value would be stored in memory at the specified address. So in this case, the value 30 will be specified at memory address 0001.
   And remeber all this happens in a call-stack  where the primitive values are stored. The identifier actually points to the address not the value itself. So we would say 
   that the age variable is equal to 30, but infact, age is equal to the memory address 0001, which holds the value of 30.
   
   --> Now in next line we declare oldAge to be equal to age. So knowing that a variable actually holds a memory address, what should oldAge look like?
      ---> Well, it will simply point to the same memory address as the age variable. And so it will look like oldAge, is simply 30 as well. 
*/
