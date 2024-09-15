/* regular vs arrow functions  */

const rehman = {
  firstName: "rehman",
  birthYear: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.birthYear);
  }, // this kind of block does not create its own scope. So, this is not a code block. It is an object literal. So it's just a way that we literally define objects.

  greet: () => console.log(`Hey ${this.firstName}`),
};

rehman.greet();
