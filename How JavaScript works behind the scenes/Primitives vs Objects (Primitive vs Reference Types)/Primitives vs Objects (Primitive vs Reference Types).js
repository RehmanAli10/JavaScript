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

--> When we declare a variable like age equals 30, what actually happens inside the javascript engine and the computer memory?
   --> Wll, first javascript will create a so called unique identifier with the variable name. Then a piece of memory will be allocated with a certain address, 
   so 0001 in this example, and finally the value would be stored in memory at the specified address. So in this case, the value 30 will be specified at memory address 0001.
   And remeber all this happens in a call-stack  where the primitive values are stored. The identifier actually points to the address not to the value itself. So we would say 
   that the age variable is equal to 30, but infact, age is equal to the memory address 0001, which holds the value of 30.
   
   --> Now in next line we declare oldAge to be equal to age. So knowing that a variable actually holds a memory address, what should oldAge look like?
      ---> Well, it will simply point to the same memory address as the age variable. And so it will look like oldAge, is simply 30 as well. But now in the next line, we set age to 31. What will happen then. The value at address 0001 will certainly not become 31 because that will change
      old age as well, since they both point to the same address so that would make no sense at all. Also the value at a certain memory address is immutable, or in other words, it cannot be changed. So instead what's going to happen here is that a new piece of memory is allocated so it's created
      and the age identifier now simply points to the new address, which holding the new value of 31, And that's why when we log both our variables to the console in the end, they both return exactly values that we expect.   

  Reference values example
  ------------------------

  const me={
  name:"Rehman Ali",
  age:24
  }
  const friend=me;
  friend.age=27;

  console.log("Friend", friend); // {name:"Rehman Ali" , age:27}
  
  console.log("Me:", me); // {name:"Rehman Ali", age:27}

  --> When a new object is created such as this "me" object, it is tored in the heap. And such as before there is a memory address and then the value itself. Now in the case of reference values like this "me" object the "me" 
  identifier does actually not point directly to this newly created memory address in the heap so in this example D30F, instead it will point to a new piece of memory that's creatd in the stack. And this new piece of memory
  will then point to the object that in the heap using memory address as its value. In other words, the piece of memory in the call stack has a reference to the piece of memory in the heap, which holds our "me" object. And that's
  the reason why we call objects reference types in this context. So again, when we declare a variable as an object, an identifier is created, which points to a piece of memory in the stack, which in turn points to a piece of memory 
  in the heap. And that is where tht object is actually stored. And it works this way because object might be too large to be stored in the stack instead they are stored in the heap, which is like an almost unlimited memory pool. And 
  the stack just keeps a reference to where the object is actually stored in the heap so that it can find if whenever necessary.
  
  --> We create a new variabe called friend tat we set equal to "me" object. What will happen here?. Well, just like with primitive vaelus, the friedn identifier will point to the exact memory address as the "me" identifier. And again that 
  address contains the reference, which then points to the object itself. And like this "friend" object is now essentially the exact same as the "me" object.
  
  --> Now we're gonna change a property in the "friend" object by setting friend.age equal to 27. So what happens then is that the object is found in the heap, and the 30 is changed to 27. Even though we defined the "friend" variable as constant, we can 
  actually still manipulate the object without problems. And when we think about that, it makes sense becuase we are actually not changing the value in memory for the friend identifier, it is still D30F so the reference to the object. All we did was to change 
  the value in the heap, and that's not a problem. So it's a misconception that all variables declared with const are immutable. In fact, that is only true for primitive values, but not for reference values.
  
  --> As we log the "friend" variable to the console, we get the age of 27, but then when we log the "me" object, we get the weird behaviour. In the "me" object, age is now also 27, even though we never changed me.age directly. And the reason for this is the fact 
  that "me" and "friend" actually point to the exact same object in the memory heap. So, whenever we change something in this object, it will always be reflected in "friend" and in "me" so in both these objects, these are basically just two different identifiers pointing 
  to the exact same value. And once again, that value is the memory address D30F which points to the reference in the memory heap. And one implication of this is that whenever you think that you're copying an object, you're really just creating a new variable that points to 
  the exact same object. In general, this is how reference value work in javascript.

*/
