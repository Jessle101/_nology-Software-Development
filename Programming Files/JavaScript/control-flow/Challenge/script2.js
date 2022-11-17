// Create two variables x & y
x = 2;
y = 2;

y = 5;

x = 29;

// Write an if / else block
// It should compare a number x to another number y
// It should print (“x is greater than y”) in the console
// Or “x is smaller than y”
// Or “x is equal to y”
// Depending on the value of x and y
if (x === y) {
  console.log("x is equal to y!");
} else if (x > y) {
  console.log("x is greater than y by " + (x - y) + "!");
} else if (x < y) {
  console.log("x is less than y by " + (y - x) + "!");
}
