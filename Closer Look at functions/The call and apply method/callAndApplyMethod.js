const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );

    this.bookings.push({
      flight: `${this.iataCode} ${flightNum}`,
      name,
    });
  },
};
lufthansa.book(239, "Rehman Ali");
lufthansa.book(635, "Messi");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book; // its not a method anymore its basically a regular function call

// Does not work
// book(23, "Kazuya");

// call method
book.call(eurowings, 23, "Kazuya mishima");
console.log(eurowings);

book.call(lufthansa, 239, "John");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Akuma");

// Apply method
/*                    
--> The apply method does exactly the same thing. The only difference is that apply does not receive a list of arguments after this keyword instead its goinf to take an array of the argument. 
--> This apply method is not used anymore in the modern javascript becuase now we actually have a better way of doing the exact same thing.  
*/

const flightData = [583, "Bradley Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); // this here same as the apply above

// Bind Method
/*    
Just like the call method bind also allows us to manually set this keywords for any function call. Now, the difference is that bind does not immediately call the function. Instead it returns a new function where the this keyword is bound. So it's set to whatever value we pass into bind. 
*/
const bookEW = book.bind(eurowings); // this will not call a book function instead it will return a new function where this keyword will always be set to Eurowings.
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(100, "Inaki Williams");

const bookEW23 = book.bind(eurowings, 23); // specifying parts of the argument beforehand, is actually a common pattern called partial application. So essentially, partial application means that a part of the arguments of the original function are already applied, so which means already set. And so thats exactly what the bookEW23 function is, its essentially the book function but with 23 already predefined.
bookEW23("Sultan Ahmad");
bookEW23("Arthur Morgan");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes); // this is NaN and the reason for that is that this keyword is the button element because in an event handler function that this keyword always points to the element on which the handler is attached to.
};

// document
//   .querySelector(".buy")
//   .addEventListener(lufthansa.buyPlane.bind(lufthansa));

// Partial Application (Partial application means that we can preset parameters)
// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));

// challenge convert the above to function that return another function

function addTaxRate(rate) {
  return function (value) {
    return value + value * rate;
  };
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
