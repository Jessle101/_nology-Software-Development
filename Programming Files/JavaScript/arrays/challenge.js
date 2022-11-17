// Challenge: Listing Hobbies
// MVP
// Create an array with 3 of your hobbies
const hobbies = [];
hobbies.push("Programming");
hobbies.push("Soccer");
hobbies.push("Singing");
console.log(hobbies);

// Print in the console the first hobby in the array
console.log(hobbies[0]);

// Remove that first hobby from the array and store that hobby in a variable
var firstHobby = hobbies[0];
console.log(firstHobby, "var");
hobbies.shift();
console.log(hobbies);

// Store the length of the array in a variable
hobbiesLength = hobbies.length;
console.log("length is: ", hobbiesLength);

// Add another hobby at the end of the array
hobbies.push("Listening to Music");
hobbiesLength = hobbies.length;

// Print that last hobby in the console
console.log(hobbies[hobbiesLength - 1]);

// Bonus:
// Join all your hobbies in a single string each hobby being comma separated (i.e. “My hobbies are: hobby1, hobby2, hobby2”)
console.log(hobbies.join(", "));

// Challenge: Grocery Lists
// MVP
// Create an array containing 5 grocery items you often buy
const groceryFavs = ["apple", "pear", "papaya", "mango"];
// Log this list to the console, make sure the output is pipe delimited
// ['apple', 'pear', 'papaya', 'mango'] => 'apple|pear|papaya|mango'
console.log(groceryFavs.join("|"));
