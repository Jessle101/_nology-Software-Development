// 1. What is a for loop?
// A way to run our code multiple times, one of the use cases would be to iterate through an array

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// an alternative and a better way to do it is use a for loop

for (let i = 0; i < 5; ++i) {
  console.log(i + 1);
}
//  let i = 0 -> initial value

// i < 5 - condition - the loop will run until this condition is no longer true

//  ++i -> update our initial value so the loop doesn't run forever

let i = 0;
let j = 0;

console.log(++i); // returns 1 as it increments before logging i.
console.log(j++); // return 0 as it console logging j before it increments.

// first time my code runs
// i = 0
// console.log(0)
// ++i -> i = 2

//  i < 5 - this is true because 2 < 5
// console.log(2)
// ++i -> - = 3

// i = 3;
// 3 < 5 -> true
// console.log(3)
// ++i -> i = 4

// etc, until 5 = 5
// 5 is NOT less than 5 (false) -> loop no longer runs

// How to loop through arrays

const students = ["Tomo", "Tim", "Luke", "Alex"];

for (let index = 0; index < students.length; ++index) {
  console.log(students[index], index);
}

// we want to create a new array with the same names, but all uppercase

// this is an empty array where I will push my new values/modified values from mky original array
const upperCaseStudents = [];

for (let i = 0; i < students.length; ++i) {
  let students = students[i].toUpperCase();
  upperCaseStudents.push(students);
}

console.log(upperCaseStudents);

let letters = ["n", "o", "l", "o", "g", "y"];
let str = "";

for (let i = 0; i < letters.length; ++i) {
  str += letters[i];
}

console.log(str);

// Delay in set time out, or setinterval
setTimeout(() => {
  for (let i = 0; i < 10; ++i) {
    console.log(i);
  }
}, 2000);

//  lopping throgh arrays backwards

const reversed = [];

for (let i = students.length - 1; i >= 0; --i) {
  console.log(students[i], i);
  reversed.push(students[i]);
}

console.log(reversed);
console.log(students);
