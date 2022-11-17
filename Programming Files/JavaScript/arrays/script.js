// What are arrays?

// Collection of data, like variables, other arrays, objects, etc
// JavaScript way of creating lists

const coach1 = "Sandra";
const coach2 = "Remi";
const coach3 = "Cal";

console.log(coach1);
console.log(coach2);
console.log(coach3);
// I can create a coaches' array, and store all of the values under one variable name

// literal notation

const coaches = [coach1, coach2, coach3, "Martyna"];

console.log(coaches);

// What if I wanted to get access to just one element of the array?
// Each element in an array has an index, index start at 0

console.log(coaches[0]);
console.log(coaches[1]);
console.log(coaches[2]);
console.log(coaches[(3, 1)]);

// how could I access the last element from an array?

// the length property gives us the nmber of elements in an array, the last item will always have the index of length -1
const lastItem = coaches.length;
console.log(coaches[lastItem - 1]);
// can we do -1?
console.log(coaches[-1], "-1");

// array constructor

const myArray = new Array(1, 2, 3);

console.log(myArray);

const anotherArr = new Array(5);

// this will create an array with 5 empty spots
console.log(anotherArr);

console.log(anotherArr.length, anotherArr[0], anotherArr[1]);

// sometimes you need to create an array filled with some values
const myArrayOfZeros = new Array(4).fill(0);

console.log(myArrayOfZeros);

// array, method, property

// Adding or removing items from an array

// push - adds elements to the end of our array

const students = [];
console.log(students.length);

students.push("Tim");

console.log(students.length);
console.log(students);

students.push("Paul");
console.log(students.length);
console.log(students);

students.push("Joanne");
students.push("Param");
students.push("Jessie");

console.log(students);

// Adding elements to the start of our array

// unshift

students.unshift("Margarita");
students.unshift("Luke");

console.log(students);

students[0] = "Edric";
students[3] = "Ayush";

console.log(students);

// Removing elements from an array
// two methods
// remove elements from the start
// shift

stundents.shift();
console.log(students);

// remove elements from the end
// pop

stundents.pop();
console.log(students);

// Adding something to an array without methods
console.log(students.length);
students[2] = "Tim";
console.log(students);

// array iterators - this will come later

// includes
console.log(students.includes("Param")); //returns true or false boolean

// .indexOf
console.log(students.indexOf("Param"));

if (students.includes("Param")) {
  console.log("Param is one of the students");
} else {
  console.log("Param is NOT one of the students");
}

// .join

// array of strings, turn into one stringle
console.log(students.join(" "));
