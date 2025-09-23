// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");
// greeterHey("Rehman Ali");
// greeterHey("Steven");

// greet("Hello")("Jin kazama");

const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet("Hi")("Jin kazama");
