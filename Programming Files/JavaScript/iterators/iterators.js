// 1. What are array iterators?
// built in methods, methods that operate on each individual element of an array

// 2. Why do we use iterators?
// a lot less space, easier to debug & a lot less error prone (gets rid of risk of accidentally creatingan infinite loop)

// we need to create a new array where we would store the values of our original array after we modify them

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// we want to create a new array that will have all the numbers incremented by 1

// we need to create an empty array

const newNumbers = [];

// we need to loop through our array
// increment each number
// push that incremented number to the new array

for (let i = 0; i < numbers.length; ++i) {
  newNumbers.push(numbers[i] + 1);
}

console.log(newNumbers);

// we want to create a new array with every number to the power of 2

const squareNums = [];

for (let i = 0; i < numbers.length; ++i) {
  squareNums.push(numbers[i] ** 2);
}

console.log(squareNums);

// MAP

// methods are basically functions and requires parameters (i.e. .map())
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

// in javascript a function is just a value, which means we can pass it as a parameter to other functions
function add(num1, num2) {
  console.log(num1 + " is number 1, " + num2, "is number 2");
  return num1 + num2;
}

function subtract(a, b) {
  console.log(a + " is number 1, " + b, " is number 2");
  return a - b;
}

function doMath(x, y, callback) {
  return callback(x, y);
}

const answer = doMath(2, 5, subtract);
console.log(answer, "answer");

// const incrementedWithMapArray = numbers.map(/* callback function*/);

// the callback function in map specifies what we want to do with each of the elements of our array

function addOne(num) {
  return num + 1;
}

const incrementedWithMapArray = numbers.map(addOne);

console.log(
  incrementedWithMapArray,
  "this is the result of map method called with addOne function"
);

// map method returns a new array
// i.e. no need to create an empty array and no infinite loops in relation to the for loops

function squareNum(num) {
  return num * num;
}
const squaredNumbsWithMap = numbers.map(squareNum);

console.log(
  squaredNumbsWithMap,
  "this is the result of map method called with squareNum function"
);

// we want a new array with doubled numbers
// number, the parameter of my function represents one element of my array
const doubleNums = numbers.map((number) => number + number);

console.log(doubleNums, "has been doubled!");

// with arrow functions we can skip the return keyword and curly brakcets if we only have one line of code

const decByOne = (num) => num - 1;

console.log(decByOne(70));

// same as:
const decByOneFull = (num) => {
  return num1 - 1;
};

const tripleNums = numbers.map((n) => {
  console.log(n, "num");
  return n * 3;
});

console.log(tripleNums, "THIS IS WHAT MAP RETURNED SHEESH");

// return a string that says the array element is ... for each of the elements
const exampleFunc = numbers.map(() => {});

const stringArr = numbers.map(() => {
  return "The array element is ${element}";
});

// const stringArr = numbers.map((element) => "The array element is ${element}");

console.log(stringArr);

//  what are the parameters of the map method

const halfNums = numbers.map((number, index, arr) => {
  // first parameter of map is the element of our array, the same as numbers[i] in a loop
  console.log("number is ", number);

  console.log("The second parameter of map ", index);

  console.log("this is the third param of map ", arr);
});

// The map implementation, don't do this in real life
// map returns an array that is the exact same length as original array

const myMap = (array, func) => {
  const newArray = [];
  for (let i = 0; i < array.length; ++i) {
    newArray.push(func(array[i]));
  }

  return newArray;
};

const numsForMyMap = [2, 3, 4];

// console.error.log(myMap(numsForMyMap, (num) => num + 2));

// filter
// it returns a new array with elements that match a specified condition
// takes a callback function
// predicate function - a function that returns a single true or false

function isEven(n) {
  return n % 2 === 0;
}

// function isOdd(n) {
//     return n % 2 !== 0;
// }

const numsToFilter = [2, 3, 69, 5, 10, 12981, 372];

const filteredNums = numsToFilter.filter(isEven);

console.log(filteredNums);

const oddNums = numsToFilter.filter((number) => number % 2 !== 0);

console.log(oddNums);

const fourNums = numsToFilter.filter((num) => num > 4);
console.log(fourNums);

const names = ["Paul", "Edric", "Param", "Ashley"];
//  a new array with names that are exactly 5 letters long

const equalToFive = names.filter((name) => name.length === 5);
console.log(equalToFive);

// our own implementation of filter - just for learning purposes

// const myFilter = (array, func) => {
//   for (const item of array) {
//     if (func(item)) {
//       newArray.push(item);
//     }
//   }

//   return newArray;
// };

// console.log(myFilter(names, (name) => name.length === 4));

// find
// returns a single value, the first value that matches out condition

const first5LetterName = names.find((name) => name.length === 5);
console.log(first5LetterName);

// every
// sometimes we need to check if ALL elements of our array meet a certain condition
// returns a true if yes
// and a false if no

// returns false, because there are elements in the array that are shorter than 5 letters
const isEveryNameFiveCharactersOrLonger = names.every(
  (name) => name.length >= 5
);
console.log(isEveryNameFiveCharactersOrLonger);

// returns true, because every name in the names array is greater or equal to 4 letters
const isEveryNameFourCharactersOrLonger = names.every(
  (name) => name.length >= 4
);
console.log(isEveryNameFourCharactersOrLonger);

// some
// tells us if at least one element meets a certain condition
const arrayHasAName4LettersLong = names.some((element) => element.length === 4);
console.log(
  arrayHasAName4LettersLong,
  "has at least one name that's 4 letters long"
);

const arrayHasAName3LettersLong = names.some((element) => element.length === 3);
console.log(
  arrayHasAName3LettersLong,
  "has at least one name that's 3 letters long"
);

// forEach()
// we want to console.log each element

const fromForEach = names.forEach((name) => console.log(name));
console.log(fromForEach, " this is what forEach returns");

// .concat, .include, .flatmap
// reduce - more on that tomorrow
