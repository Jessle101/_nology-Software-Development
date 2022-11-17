// Create a variable userInput
// var userInput = prompt("Please enter a message");
let userInput = true;

// Write an if / else block,
// If the input is a number
if (typeof userInput === "number") {
  // it should console log that number but squared
  console.log(
    userInput + " is a number! and the squared value is: "(userInput ** 2)
  );
  // If the input is a string, it should console log that input
} else if (typeof userInput === "string") {
  console.log(userInput + " is a string!");
  // If the input is anythig else, the console should say “invalid input”
} else {
  console.log(userInput + " is an invalid input!");
}

const myNumber = 2;

if (myNumber === 2) {
  console.log("Number is equal to one 1");
} else if (mynumber > 0) {
  console.log("My number is greater than 0");
} else {
  console.log("My number is negative or 0");
}

if (myNumber <= 0) {
  console.log("The number is negative or 0");
}

if (myNumber > 1) {
  console.log("The number is greater than 1");
}

if (myNumber > 0) {
  console.log("The number is greater than 0");
}

// What is an alternative to an if block?
// Switch statement

const errorCode = 2;

switch (errorCode) {
  // if(errorCode == 0)
  //  console.log
  // }
  case 0:
    console.log("Program has run successfully");
    break;
  case 1:
    console.log("Error code 1");
    break;
  case 2:
    console.log("Error code 2");
    break;
  case 3:
    console.log("Error code 3");
    break;
  default:
    console.log("Invalid error code!");
}

const input = "e";

switch (input) {
  // three inputs & one output - grouped together!
  case "e":
  case "E":
  case "exit":
    console.log("The app is exiting...");
    break;

  case "c":
  case "C":
  case "continue":
    console.log("Continue execution...");
    break;

  default:
    console.log("error: Command not found");
}

// Same can be achieved with if/else & switch functions
