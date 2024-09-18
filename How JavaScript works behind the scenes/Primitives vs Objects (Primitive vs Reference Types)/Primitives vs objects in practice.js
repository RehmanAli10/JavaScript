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

 */

const jessica = {
  firstName: "jessica",
  lastName: "williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";

console.log("Before marriage:", jessica);

console.log("After marriage:", marriedJessica);

// --> We're copying the entire object here. At least that's what it looks like but behind the scenes we are actually just copying the reference, which will
// then point to the same object. And so now, as we change the last name on marriedJessica, it also changes the original object. Why it hapened? It happened because
// when we attempted to copy the original jessica object, it did not create a new object in the heap. "marriedJessica" is not an object in the hea its simply just another
// variable in the stack,
