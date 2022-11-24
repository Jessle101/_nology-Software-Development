// Challenge: Lad in the pub
// MVP:
// Create a function that will return a string “You are allowed to drink” or “You can’t have a drink” based on three variables -> can drink - age >= 18 and country not USA, drunk level below 3 or less

// Add a script.js file to the provided code and add the following functionality:

// The function should be triggered on form submit.
// If the person is allowed to enter the pub, the colour of the bottle and the button background should change to green.
// If the person is not allowed to enter the pub, the bottle and the button background should be red
// The string returned by the function should be rendered under the button.
// Only one message should be rendered, if there is already a message on the page, it should be removed when the user clicks the button again and a new one should be displayed.
// BONUS: Familiarise yourself with the following docs: https://developer.mozilla.org/en-US/docs/Web/API/FormData and implement the challenge using FormData

// 1. I will definitely have to select some elements
// 2. What will the user be doing?
// 3. & what eleement will they interact with?
// -> form
// project: fakeOS -> they will be interacting with the icons and the start

// Find out how the user is providing me information -> through form inputs
// How can I access what they put in the inputs -> input.value

// When the user submits the data, I have access to it, I need to check what the values of that data are and compare to something, include some logic

// I know what I want this project to do -> render a message, change colours

// I need to check the data to see what message I should render and how I would change the colours

// I need to add some javascript logic that will look at the data and tell me which string to render -> what colour to use

// after I know the logic & confimed that it works, I will update my DOM with the colour and the strings

// I know that updating needs to happen when the userr submits the form, beccause I spent some time looking at the HTML

// I have a form that I need to submit -> event listener added to the form, "submit"

// try writing the JS logic first, only working with some parameters

// we need to decide if the user is old enough for the country they are in and if they are not too drunk -> true/false

// at some point I will have to add a message to the page -> i.e. my function can just return the message

// I know that I will need to run the same logic many times, with many form submissions -> I probably need a function that I can call everytime the user submits the form

const canTheUserDrink = (age, country, drunk) => {
  if (
    (age >= 18 && country !== "USA" && drunk <= 3) ||
    (age >= 21 && country === "USA" && drunk <= 3)
  ) {
    return "You can drink";
  } else {
    return "You can't drink";
  }
};

// run that logic every time the user submits a form
// eventListener
// grabbing the data from the form]
// call function with that data

const formContainer = document.querySelector(".container");
console.log(formContainer);
console.dir(formContainer);

const form = document.querySelector(".form");
console.log(form);
console.dir(form);

const formAge = document.querySelector("#age");
console.log(formAge);
console.dir(formAge);

const formCountry = document.querySelector("#country");
console.log(formCountry);
console.dir(formCountry);

const formDrunk = document.querySelector("#drunk");
console.log(formDrunk);
console.dir(formDrunk);

const message = document.querySelector("#message");
console.log(message);
console.dir(message);

const bottle = document.getElementsByTagName(bottle, "bottle");

const button = document.querySelector("#btn");
console.log(button);
console.dir(button);

form.addEventListener("submit", (e) => {
  // remember to not auto-refresh JS forms
  e.preventDefault();
  // I need to know what data the user submits so I can run my logic -> .value

  // I have inputs -> inputs have value
  console.log(age.value, country.value, drunk.value);

  //   trigger the logic with the data
  const result = canTheUserDrink(age.value, country.value, drunk.value);
  console.log(result);

  // I need to check if my div is empty -> if yes, print message, if not -> remove what's in it and then print message

  // each node has a childNodes property that tells us what are nested in it
  if (messageDiv.childNodes.length > 0) {
    // remove the element
    messageDiv.removeChild(document.quertySelector("#messageText"));
  }
  // I need to create a p tag
  const pp = document.createElement("p");
  // I want my p to have id
  p.id = "messageText";
  // a text node
  const text = document.createTextNode;
  // link the two together
  p.appendChild(text);
  // add it to parent that's already in html
  messageDiv.appendChild(p);

  if (result === "You can drink") {
    bottle.src = "./assest/green_beer.svg";
    button.style.backgroundColor = "green";
  } else {
    bottle.src = "./assest/red_beer.svg";
    button.style.backgroundColor = "red";
  }

  form.reset();
});

// form.addEventListener("submit", () => {
//   const nothingPara = document.querySelector("#nothingPara");
//   alert("hi");
// });

// const createElement = (elementType, text, parent) => {
//   const newElement = document.createElement(elementType);

//   const textNode = document.createTextNode(text);

//   newElement.appendChild(textNode);

//   parent.appendChild(newElement);
// };
