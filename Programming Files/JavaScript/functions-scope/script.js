// What is scope?

// determines where we can access our variables from

// global scope
// means our variables can be accessed anywhere in the code

// block scope

// function scope

// global variable, accessable from anywhere in my code
const myName = "Jessie";

if (myName.length > 10) {
  console.log("The name is more than 10 characters long");
} else {
  console.log("The name is less than or 10 characters");
}

function printMyName() {
  console.log(myName);
}

printMyName();

if (true) {
  // local variable, only exists within the if block
  let thing = "variable from if block";
  console.log(thing);
}

function printThing() {
  // any variable you can create inside a function exists only in the context of that function
  let thing = "variable from my function";
  console.log(thing);
}

printThing();

let thing = "my global variable";
// console.log(thing);

const circleArea = (radius) => {
  const area = Math.PI * radius ** 2;
};

// This will give me an error that radius is not defined, it only exists in the context of my function
//

const functionOne = () => {
  const firstName = "John";
  return firstName;
};

const functionTwo = () => {
  const lastName = "Smith";
  return lastName;
};

const myGlobal = "Global String";

const scope1 = (scopeOneArg) => {
  const myNumber = 123;
  // What can I access in here?
  console.log(scopeOneArg, 1);
  console.log(myNumber, 1);
  console.log(myGlobal, 1);

  const scope2 = (scopeTwoArg) => {
    const myValue = 345;

    // What can I access in here?
    console.log(myGlobal, 2);
    console.log(myNumber, 2);
    console.log(scopeOneArg, 2);
    console.log(scoreTwoArg, 2);
    console.log(myValue, 2);

    const scope3 = (scopeThreeArg) => {
      const anotherValue = 678;

      // myNumber, myValue, anotherValue, myGlobal
      console.log(scopeThreeArg, 3);
      console.log(scopeTwoArg, 3);
      console.log(scopeOneArg, 3);
      console.log(myNumber, myValue, anotherValue, 3);
    };

    scope3("Scope three arg");
  };

  scope2("Scope two arg");
};

scope1("Scope one arg");

// Homework

// function purity, what are pure functions?
