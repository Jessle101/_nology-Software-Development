// DOM - Document Object Model
// tree-like factor of nodes
// https://www.w3schools.com/js/js_htmldom.asp
// https://www.w3schools.com/js/js_htmldom_collections.asp
// https://www.w3schools.com/js/js_htmldom_nodelist.asp

// Why do we need DOM?
// run JavaScript when a user interacts with the html

// How do we manipulate the DOM?

// console.log(document.all);

// 1. First thing we need to do is to select the element that we want to work with

// I want to grab the input
// I want to store it in a variable so I don't have to grab it each time

const taskInput = document.querySelector("#taskInput");
console.log(taskInput);
console.dir(taskInput);

// accepts any ids
const heading = document.getElementById("mainTitle");
console.log(heading);
console.dir(heading);

// accept any style sheet selector
const buttons = document.querySelectorAll(".button");
console.log(buttons);
console.dir(buttons);

// targets first button in the document
const firstBtn = buttons[0];
console.log(firstBtn);

const divs = document.getElementsByClassName("container");
console.log(divs);
console.dir(divs);

const styleBtn = document.querySelector("#styleBtn");
console.log(styleBtn);
console.dir(styleBtn);

const Body = document.querySelector("body");
console.log(body);
console.dir(body);
// get element by tag name, etc - documentation

// I selected the elements, I can run the code when the user interacts with those elements

console.log(divs[0 /*specifies first div*/].classList);
// I selected the elements, I can run code when user interacts with those elements

// TO DO LIST MVP
// 1. Create a button that allows to change styling of our page from light mode to dark mode, & back

styleBtn.addEventListener("click", () => {
  body.classList.toggle("body--darkMode");
  for (let i = 0; 1 < divs.length; ++i) {
    divs[i].classList.toggle("container--darkMode");
  }

  buttons.forEach((btn) => {
    btn.classList.toggle("button--darkMode");
  });
  //   divs[0].classList.toggle("container--darkMode");

  //   for (let i = 0; 1 < divs.length; ++i) {
  //     buttons[i].classList.toggle("button--darkMode");
});
