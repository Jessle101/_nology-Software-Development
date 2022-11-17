// What are functions?
// A pice of code that does something with data
// a blueprint of what we want to do

// Why do we need them?
// we don't want to repeat our code
// we want to run the same block of code multiple times

const coach1 = "Remi";
const coach2 = "Sandra";
const coach3 = "Cal";

console.log("Hi, my name is ${coach1}");
console.log("Hi, my name is ${coach2}");
console.log("Hi, my name is ${coach3}");

// this function doesn't have a specified return value; hence, it will have the default return value
function sayHi(coachName) {
  // this will be the code that I want to run everytime I call this function
  console.log("Hi, my name is ${coachName}");
}

sayHi(coach1);
sayHi(coach2);
sayHi(coach3);
sayHi("Martyna");
sayHi("Aidan");

// in contract this function has a return
function sum(numOne, numTwo) {
  return numOne + numTwo;
}

sum(10, 11);

const result = sum(10, 11);

console.log(result);

// a function that calculates the area of a triangle
function triangleArea(width, length) {
  return width * length * 0.5;
}

console.log(triangleArea(15, 12.5));

// function that return the discount for a meal at a restaurant based on age
// under 12 -80%
// under 18 - 50%
// over 18 and 18 - no discount

function discount(age) {
  if (age < 12 && age > -1) {
    return "80%";
  } else if (age < 18) {
    return "50%";
  } else {
    return "no discount";
  }
}

console.log(discount(-4));
console.log(discount(0));
console.log(discount(12));
console.log(discount(17));
console.log(discount(20));

// Arrow Functions
const subtractArrow = (num1, num2) => {
  return num1 - num2;
};

console.log(subtractArrow(2, 9));
