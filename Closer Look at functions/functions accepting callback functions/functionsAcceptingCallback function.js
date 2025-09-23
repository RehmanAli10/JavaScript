const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String:${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best", upperFirstWord);

transformer("JavaScript is the best", oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log("👋");
};

document.body.addEventListener("click", high5);
["Rehman", "wasama", "taimoor"].forEach(high5);

/*               
Why our callback functions so much used in javascript and why are they so helpful?

--> The first big advantage of this it that it makes it easy to split up our code into more reusable and interconnected parts.
--> The second biggest advantage is that callback functions allows us to create abstraction.


*/
