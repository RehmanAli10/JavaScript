/*       

--> lets analyze it whats happening the flight here "checkIn(flight, rehman)" is a primitive type its just a string and as we passed that value in to the function down here then the flightNum in function is basically copy 
of the original value so flightNum contains a copy, and not simply the original value of the flight variable. So, this would be exactly the same as writing "flightNum=flight" this would also simply copy this value flightNum. so, the flightNum inside function is completelty 
different variable and therfore as we changed it inside the function it did not get reflected in the outside flight variable.

--> But now what's about the rehman object we passed in to the checkIn function and in that function it is called passenger and then we change that passenger object and then we can see that rehman object was also affected by that change. why is that? so when we pass a refrence type 
to a function, what is copied is really just a reference to the object in the memory heap. so that would be exactly like doing this passenger=rehman when we are copying an object like this we are really only copying the reference to that object in the memory heap, but they both point to
the same object in memory and so that's exactly what is also happening here, with the rehman object, as we pass it in to the check in function where it is called passenger. 

--> In summary, passing premitive type to a function is really just the same as creating a copy like this const flightNum = flight; outside of the function. so the value is simply copied. On the other hand, when we pass object to a function, it is really just like copying an object like this
const passenger=rehman; and so whatever we change in the copy will also happen in the original.

--> In programming there are two terms when dealing with functions which is passing by value and passing by refrence. So Javascript does not have passing by refrence, only passing by value, even though it looks like it's passing by reference. So there are languages like C++ where you can pass a reference to any value,
instead of the value itself this works even with primitives, so you could pass a reference to the value of five and then the original value outside of the function, would be changed. And this is called pass by refrence.

--> Javascript does not have pass by reference. I know its confusing as we have learned for objects, we do in fact pass in a reference. So the memory address of the object. However, that reference itself is still a value. Its simply a value that contains a memory address. So basically we pass a reference to the function,
but we do not pass by reference and this is an important distinction.

*/

const flight = "LH234";
const rehman = {
  name: "Rehman Ali",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  // not good practice to change the parameter of function
  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 24739479284) {
    console.log("Checked in");
  } else {
    console.log("Wrong passport!");
  }
};

// checkIn(flight, rehman);
// console.log(flight); // LH234
// console.log(rehman);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000);
};

newPassport(rehman);
checkIn(flight, rehman);
