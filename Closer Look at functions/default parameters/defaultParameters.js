"use strict";

/*           
--> Sometimes its useful to have functions where some parameters are set by default this way we do not 
have to pass them in manually in case we dont't want to change the default.

--> The default values can contain any expression eg price=199*1.2

--> We can also use the value of other parameters that were set before it.

--> Note: we cannot skip arguments when we called a function e.g lest say we wanted to leave the number of 
passengers as the default value, but then specify the prices.
*/
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // old way of setting default parameters before ES6 (ES5)
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2);
createBooking("LH123", 3);

createBooking("LH123", undefined, 1000); // --> Note: we cannot skip arguments when we called a function e.g lest say we wanted to leave the number of passengers as the default value, but then specify the prices.
