// REDUCE

// it takes in a function with at least two parameters
const numbers = [1, 2, 3, 4, 5, 6];

// adding current to total (total = sum of numbers/each current iteration)
// const sum = numbers.reduce((accumulator, current) => {
//   console.log({ total, current });
//   return accumulator + current;
// });

console.log(sum);

let sumOfNum = 0;

for (let i = 0; i < numbers.length; ++i) {
  console.log(sumOfNum, "sumOfNum", i, "i");
  sumOfNum += numbers[i];
}

console.log(sumOfNum);

const subtract = numbers.reduce((accumulator, current) => {
  console.log({ total, current });
  return accumulator - current;
});
console.log(subtract);

// example with a string

const letters = ["n", "o", "l", "o", "g", "y"];

// I don't want an array of strings I want a single string -> I can add my letters

const word = letters.reduce((acc, current) => {
  console.log({ acc, current });
  return acc + current;
  // return acc += current;
});

const numbersTwo = [2, 4, 6];

// if I don't pass the initial value of accumulator, the first element of the array becomes the initial value of the accumulator, the second el is the first current
const numTwoSum1 = numbersTwo.reduce((acc, curr) => {
  console.log(acc, curr);
  return acc + curr;
});

console.log(numTwoSum1);

// optional second argument - initial value of the accumulator - that can be anything you want
const numTwoSum = numbersTwo.reduce((acc, curr) => {
  console.log(acc, curr);
  return acc + curr;
}, 10 /*initial value)*/);

console.log("break");

// const multipliedNums = numbersTwo.reduce(
//   (acc,
//   (curr) => {
//     console.log({ acc, curr });
//     return acc * curr;
//   )
// }, 100);

const someName = ["Martyna", "Sandra", "Krol"];

// const initials = someName.split(" ").reduce(() {})
const initials2 = someName.split(" ").reduce((acc, curr) => {
  console.log({ acc, curr });
  return acc + curr[0];
}, "");

console.log(initials2);

const initials = someName.split(" ").reduce((acc, curr) => {
  console.log({ acc, curr });
  return acc + curr[0];
}, "My initials are: ");

console.log(initials);

// we have an array of numbers, & we want a new array with doubled numbers
const numsToDouble = [2, 3, 4];

// acc = accumulator
// curr = current
const doubleNums = numsToDouble.reduce((acc, curr) => {
  //   curr * 2 needs to end up on array - hence: push
  console.log({ acc, curr });
  acc.push(curr * 2);
  return acc;
}, []);

// first iteration:
// I passed two arguments to my reduce -> I added that initial value of the accumulator, so it doesn't default to first array element (as we wanted to return an array)
// acc [], curr 2
// we are pushing 2 to that array
// we are returning the accumulator -> accumulator is now [2]

// second iteration:
// accumulator is now [4]
// then -> we are pushing 3(new current value) * 2 to that accumulator -> [4, 6]

// accumulator is [4,6]
// current is 4
// we need to multiply 4* 2, & push it to our accumulator
// we end up with the acc being [4, 6, 8]

// no more iterations to make, we return the acc at the end

const numToIncrease = [1, 2, 3];

// use it as I would map

const increasedNums = numsToIncrease.reduce((acc, curr) => {
  console.log({ acc, curr });
  acc.push(curr + 1);
  return acc;
}, []);

// first iteration: accumulator is an empty array, current is the first array element -> 1
// we are adding 1 to 1, pushing it to the acc -> empty array, push 2 -> [2]

// second iteration
// accumulator is [2], current is the second element of the array -> 2
// we are adding 1 to 2-> 3
// we are pushing 3 to our acc -> [2, 3]

// third iteration
// accumulator is [2, 3], current is the third element of the array -> 3
// we are adding 1 + 3 -> 4
// we are pushing 4 for our acc -> [2, 3, 4]

// no more iterations, which means we return the final value of acc

// using REDUCE as filter and map combined

// I want an array of only even numbers, doubled

const numToFilterAndMap = [2, 3, 4, 5, 6];

// I want to filter to leave only even numbers
const evenNums = numToFilterAndMap.filter((num) => num % 2 === 0);
console.log(evenNums);

// I want a new array with double the numbers
const doubleNmbs = evenNums.map((num) => num * 2);
console.log(doubleNmbs);

// Let's try to do the same thing with reduce
const final = numToFilterAndMap.reduce((acc, curr) => {
  console.log({ acc, curr });
  console.log(curr % 2 === 0, "checking if current is even");
  if (curr % 2 === 0) {
    acc.push(curr * 2);
  }
  return acc;
}, []);

console.log(final);
