/*                  

Coding Challenge #4

Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀


*/

const str = "underscore_case";
const rows = str.split("\n");

for (const [i, row] of rows.entries()) {
  const [first, second] = row.toLowerCase().trim().split("_");

  const output = `${first}${second.replace(
    second[0],
    second[0].toUpperCase()
  )}`;
  console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  console.log(output.padEnd(20));
}
