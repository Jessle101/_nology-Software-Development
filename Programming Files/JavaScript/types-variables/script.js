console.log("hello world");

// What is a Primitive Data Type?
// Smallest data point possible, can not be broken further (without changing their nature, i.e. a number)

// Basics:
// Strings - a collection of characters i.e. a piece of text ("",'')
// Numbers (negative, decimal, small or big) - (2 ^ 52 -1)
// Boolean - true or false - 1 or 0;
// Undefined - nothing assigned;
// null - nothing, i.e. no results from a search;
// NaN - Not A Number -> match with not Numbers

// numerical string to number value/data type
console.log(parseInt("15" - 1));
// What are the different Primitive data types we have in JS?

typeof 15; // Number
typeof 5.5; // Number
typeof Nan; // Number
typeof "hello"; // String
typeof true; // Boolean
typeof (1 != 2); // Boolean
"hamburger" + "s"; // "hamburgers"
"hamburgers" - "s"; // NaN (plus '+' is the only exception)
"1" + "3"; // "13"
"1" - "3"; // -2
"johnny" + 5; // "johnny5"
"johnny" - 5; // NaN
99 * "luftballoons"; // NaN

// How can we create variables?
// How can you change variables?
// What is the difference between let and const
// Why dpn't you talk about var?

// What is a variable?
// A named memory spot that contains a piece of data (information)

//  Declaring a variable in JS.
// let keyword (reassignable)
let numbrr = 6;
console.log(numbrr);
number = "69";
console.log(numbrr);

// const - constant (cannot change or reassign value)
const kys = "true";
// kys = "bru"; - trying to change this var logs an error
console.log(kys);

const pi = Math.PI;
console.log(
  pi +
    0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001
);

// var (reassignable)
var poo = "yes";

// use nothing!
potato = 1928174781;
console.log(potato / 82);

const myArray = [1, 2, 3];
// myArray = "something else";
