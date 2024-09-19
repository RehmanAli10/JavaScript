/*   
 Primitive value Example 
-------------------

let lastName = "virk";
let oldLastName = lastName;
lastName = "kamiar";
console.log(lastName, oldLastName);

--> Here everything works as we would expect in an intuitive way. It works this way because each primitive value will simply be saved
 in its own piece of memory in the stack.

 Reference value Example
 -----------------------
 --> let's do the same thing as above using object as it is a reference value its gonna be stored in the heap, and the stack then just keeps 
 a reference to the memory position at which the object is stored in the heap.  
 const jessica = {
  firstName: "jessica",
  lastName: "williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";

 console.log("Before marriage:", jessica);

 console.log("After marriage:", marriedJessica);

 marriedJessica = {}; // This will not work because this new object will be stored at a different position in memory, and therefore the reference to that position in memory will have to change here in this variable. And therefore this does not work because that is in the stack and so, since it is a constant, we cannot change that value in the stack. So, we cannot change the value to a new memory address, and therefore, this does not work.

 --> We're copying the entire object here. At least that's what it looks like but behind the scenes we are actually just copying the reference, which will
 then point to the same object. And so now, as we change the last name on marriedJessica, it also changes the original object. Why it hapened? It happened because
 when we attempted to copy the original jessica object, it did not create a new object in the heap. "marriedJessica" is not an object in the heap its simply just another
 variable in the stack, which holds the reference to the orginal object. So both of these two variables "jessica" and "marriedJessica" simply point to exactly the same memory
 address in the heap. And that's because in the stack, they both hold the same memory address reference. Now this is also the reason why we can change properties in the marriedJessica
 object, which was declared using a const here. And const is supposed to be for constants so for things that we cannot change. However, what actually needs to be constant is the value
 in the stack. And in the stack, the value only holds the reference, which we are not actually changing. The only thing that we are changing is the underlying object that is stored in the
 heap. And that is okay to change that has nothing to do with const or let that's only about the value in the stack, but if we change something in the heap that has nothing to do with const or let.
 Now what we can't do is to assign a completely different object now to marriedJessica.

--> Completely changing a object in other words assigning a new object to it completely different than simply changing a property.

 What if we actually really wanted to copy the object so that we could then change one of them without changing the other?
const jessica2 = {
  firstName: "jessica",
  lastName: "williams",
  age: 27,
  family: ["Alice", "Bob"],
};
const jessicaCopy = Object.assign({}, jessica2); // what this function does is to essentially merge two objects and then return a new one.

jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);

--> using this  technique Object.assign only works for the first level or in other words, if we have an object inside the object, then the inner object will actually still be the same. So it will still point to the same place in the memory.
 And that's why we say that this Object.assign only creates a shallow copy and not a deep clone which is what we would like to have.

 Shallow Copy
-------------
--> A shallow copy will only copy the properties in the first level.

 Deep Copy
-----------
 --> Deep copy would copy everything.

 */
