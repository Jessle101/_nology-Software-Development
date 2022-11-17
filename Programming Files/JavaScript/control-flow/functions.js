// Challenge: Calculating Moon Orbits
// MVP
// Write a function that takes in a number of earth days, and returns the number of orbits the moon can perform given days.
// moonOrbits(54) => 2
// moonOrbits(365) => 13.359;
function moonOrbits(days) {
  return (days / 27).toFixed(3); // to three decimal points
}

// Challenge: Years to Days & Seconds
// MVP
// Create a function that takes your age in years and returns your age in days.
function ageInDays(age) {
  return age * 365;
}
// Create a function that takes your age in years and returns your age in seconds.
function ageInSecs(age) {
  return age * 31536000;
}

function ageInSecs(age) {
  return ageInDays(day) * 24 * 3600;
  // return ageInDays(day) * 86400;
}
// ageInDays(32) => 11680
// ageInSeconds(32) => 1009152000

// Challenge: Return the Remainder from Two Numbers
// MVP
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// remainder(1, 3) ➞ 1

// remainder(3, 4) ➞ 3

// remainder(-9, 45) ➞ -9

// remainder(5, 5) ➞ 0
function remainder(numOne, numTwo) {
  return numOne % numTwo;
}
// 9:10

// Challenge: Basketball Points
// MVP
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
let pointsTwo = 1;
let pointsThree = 1;

function basketball(pointsTwo, pointsThree) {
  return pointsTwo * 2 + pointsThree * 3;
  //   let pointsTotal = pointsTwo * 2 + pointsThree * 3;
  //   return console.log(
  //     "You scored ${pointsTotal} points total! Consisting of ${pointsTwo} two-pointers & ${pointsThree} three-pointers!"
  //   );
}

basketball(34, 5);
