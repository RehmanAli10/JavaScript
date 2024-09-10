/*
Coding challenge 6

we work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures 
of one day [3,-2,-6,-1,"error",9,13,17,15,14,9,5], calculate the temperature amplitude. keep in mind that sometimes there might be a sensor error. 
*/

// Solution:

function thermometer(temperature) {
  let maxTemp = temperature[0];
  let minTemp = temperature[0];
  for (let i = 1; i < temperature.length; i++) {
    let currentTemp = temperature[i];

    if (typeof currentTemp !== "number") continue;

    if (currentTemp > maxTemp) maxTemp = temperature[i];
    if (currentTemp < minTemp) minTemp = temperature[i];
  }
  return maxTemp - minTemp;
}

const temp = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
console.log(thermometer(temp));
