// Create a variable called day
var dayOfWeek = 2;
// const day = new RegExp(dayOfWeek + "7");

// Create a switch block that will log a string for each day of the week.
// The switch will be given a number and return the matching days of the week
switch (dayOfWeek) {
  case "1":
    console.log("Today is Sunday!");
    break;
  case "2":
    console.log("Today is Monday!");
    break;
  // e.g. if day = 2, the switch should print Today is Tuesday in the console.
  case "3":
    console.log("Today is Tuesday!");
    break;
  case "4":
    console.log("Today is Wednesday!");
    break;
  case "5":
    console.log("Today is Thursday!");
    break;
  case "6":
    console.log("Today is Friday!");
    break;
  case "7":
    console.log("Today is Saturday day!");
    break;
  // Your switch block should also handle numbers out of range
  default:
    console.log("Invalid Input! Specified number should be between 1 - 7");
}

// Tell the user what eye colour their child would have.
// Create two variables parent1 and parent2
let parent1 = "brown";
let parent2 = "green";

// Given the eye colour of each parent, it should console log the probability of their child having different eye colours, for example: Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --%

// if Parent 1 has brown eyes, then execute:
if (parent1 === "brown") {
  // i.e. if (parent1 && parent2 === "brown")
  if (parent2 === "brown") {
    console.log(
      "Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 6.25%, brown is 75% and green is 18.75%"
    );
  } else if (parent2 === "blue") {
    console.log(
      "Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 50% and green is 0%"
    );
  } else {
    console.log(
      "Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 12.5%, brown is 50% and green is 37.5%"
    );
  }
  // if Parent 1 has blue eyes, then execute:
} else if (parent1 === "blue") {
  if (parent2 === "brown") {
    console.log(
      "Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 50% and green is 0%"
    );
  } else if (parent2 === "blue") {
    console.log(
      "Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 99%, brown is 0% and green is 1%"
    );
  } else {
    console.log(
      "Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 0% and green is 50%"
    );
  }
  // if Parent 1 has green eyes, then execute:
} else {
  if (parent2 === "brown") {
    console.log(
      "Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 12.5%, brown is 50% and green is 37.5%"
    );
  } else if (parent2 === "blue") {
    console.log(
      "Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 50%, brown is 0% and green is 50%"
    );
  } else {
    console.log(
      "Your eye colours are ${parent1} and ${parent2}, the chances of your child having blue eyes is 25%, brown is <1% and green is 75%"
    );
  }
}

const age = 13;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You are too young");
}

// ternary operator

age >= 18 ? console.log("You can vote") : console.log("You are too young");

// condition ? this happens if true : this happens if false
