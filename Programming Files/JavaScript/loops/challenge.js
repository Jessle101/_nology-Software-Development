// Create a function with a for loop that will add all the numbers up to n
// 1. You should create a variable to set the upper limit of your loop

// 2. our loop should increment by 1 on each iteration

// 3. Your loop should print the final result
// sum(10) => 55
// function sum(n) {
//     let value = 0;
//     let addArray = [];

//     for (i = 1; i <= n; ++i) {
//       addArray.push(i);
//       value += i;
//     }
//     return `${addArray.join("+")} = ${value}`;
//   }

//   console.log(sum(5));
//   console.log(sum(10));

// const sum = (n) => {
//     let finalValue = 0;

//     for(let i = 1; i <= n; ++1) {
//         console.log(i, "i");
//         finalValue +- i;
//     }
//     return finalValue;
// }

// console.log(sum(10))

// Bonus:
// Try writing the function again with the same inputs and outputs Without using a loop. (You may need to google some formulas!)

// Sn =n(n+1)/2

// const sumWithFormula = (n) => {
//     return n * (n + 1) / 2;
// }

// console.log(sumWithFormula(2))
// console.log(sumWithFormula(10))

// Challenge: Capitalizing Odd Positioned Letters
// MVP
// Create a variable with a string of your choice
// Loop through the letters in this string and build a new string
// If the current index is odd, capitalize the letter before adding it to the new string
let letters = ["j", "e", "s", "s", "i", "e"];
let string = [];

for (let i = 0; i < letters.length; ++i) {
  console.log(i);
  console.log(letters[i]);
  // divide i/2, if there's nothing left it's even, else odd
  if (i % 2 === 0) {
    string.push(letters[i]);
  } else {
    const upperCaseLetter = letters[i].toUpperCase();
    string.push(upperCaseLetter);
    // string.push(letters[i].toUpperCase());
  }
  // if (str = letters.isOdd[i]) {
  //   console.log(letters[i], i);
  //   str.push(letters[i]);
  // } else (str += letters.isEven[i]) {
  //   let letters = letters[i].toUpperCase();
  //   str.push(letters);
  // }
}

let string2 = string.join("");
console.log(string2);

// Bonus
// If the current index is even increment the letter
// E.g: a becomes b, d becomes e, t becomes u
// Final: z becomes a
let str = "nology";
let newStr = "";

for (let i = 0; i < str.length; ++i) {
  let charKey = str[i].charCodeAt(0);
  //   console.log(charKey, str[i]);
  let nextCharKey = charKey + 1;
  //   console.log(nextCharKey, str[i]);
  let nextChar = String.fromCharCode(nextCharKey);

  i % 2 === 0 ? (newStr += nextChar) : (newStr += str[i].toUpperCase());
}

console.log(newStr);

// Challenge: Removing Vowels

// MVP
// Create a variable with a string of your choice
// Loop through the letters in this and build a new string
// The new strings should be the same as the input with the vowels missing
// E.g: calum => clm, rachel => rchl, martyna => mrtyn

let vowels = ["a", "e", "i", "o", "u"];
function removeVowels(name) {
  let rslOfRemoveMethod = "";
  for (let i = 0; i < name.length; ++i) {
    // .include method returns true or false
    if (!vowels.includes(name[i])) {
      rslOfRemoveMethod += name[i];
    }
  }
  return rslOfRemoveMethod;
}

console.log(removeVowels("calum"));

let str = "hello";
let vowels = ["a", "e", "i", "o", "u"];
let strOutput = "";

for (let j = 0; j < str.length; ++j) {
  for (let h = 0; h < vowels.length; ++h) {
    if (str[j] !== vowels[h]) {
      strOutput += str[j];
    }
  }
}

console.log(strOutput);

// Bonus
// Keep vowels in the new strings if they are succeeded by the letters l, m, or r
// E.g: calum => calum, rachel => rchel, martyna => martyn
