// Control Flow

// its the order in which our code is executed, by default, it is done from top to bottom
// conditional statements
// for loops, while loops

// if block

// we want to be able to run different blocks of code based on some conditions

let x = 5;

// x = 0;

// I want to print to the console if x is a truthy (any number, but 0) or falseful (0) value

if (x) {
  console.log("X is a truthy value");
}

// if (condition that needs to evaluate to tru if we want the code to be executed) {
// the block of code that we want to run
// }

// if wwant to check if y is greater than 10

let y = 11;

y = 5;

if (y > 10) {
  console.log("Y is greater than 10");
} else {
  console.log("Y is less than 10");
}

// if (condition that needs to evaluate to true if we want the code to be executed) {
// the block of code that we want to run
// } else {
//block of code that will run if the condition is false (not true)
// }

let score = 91;

score = 89;

score = 80;

score = 69;

if (score >= 90) {
  console.log("You got an A!");
} else if (score >= 80) {
  console.log("You got a B!");
} else if (score >= 70) {
  console.log("You got a C!");
} else {
  console.log("You failed!");
}
