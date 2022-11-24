// DOM - Document Object Model

// Why do we need DOM?

// How do we manipulate the DOM?

// console.log(document.all);

// 1. First thing we need to do is to select the element we want ot work with

// I want to garb the input
// I want to store it in a variable so I don't have to grab it each time
const taskInput = document.querySelector("#taskInput");
console.log(taskInput);

const heading = document.getElementById("mainTitle");
console.dir(heading);

const buttons = document.querySelectorAll(".button");
console.log(buttons);

const divs = document.getElementsByClassName("container");

console.log(divs);

const styleBtn = document.querySelector("#styleBtn");
console.log(styleBtn);

const body = document.querySelector("body");
console.log(body, "body");

const taskBtn = document.querySelector("#taskBtn");

const taskList = document.querySelector("#tasks");

// one of teh properties each node has is classList

console.log(divs[0].classList);
// I selected the elements, I can run code when user interacts with those elements

// TO DO LIST MVP
// 1. Create a button that allows to change styling of our page, form light mode to dark mode and back
// 2. We want a button that will add items to the todo list
// 3. You have nothing to do should be replaced by the first task

styleBtn.addEventListener("click", () => {
    body.classList.toggle("body--darkMode");
    heading.classList.toggle("heading--darkMode");
    for (let i = 0; i < divs.length; ++i) {
        divs[i].classList.toggle("container--darkMode");
    }

    buttons.forEach((btn) => {
        btn.classList.toggle("button--darkMode");
    });
});

// we want to add this line of html every time a user enters a task and presses the btn -> <p>{taskInput.value}</p>

// Create a p element -> this element would be empty <p></p>

// We have to create a text node -> the value of our input "The input form the user"

// We need to tell the text to go inside our p tags -> <p>{taskInput.value}</p>

// We need to tell the prepared element where to go on the page -> select an exisitng element form our page and tell out created element that it's its parent

// let's create a function that adds html elements to our page

const createElement = (elementType, text, parent) => {
    const newElement = document.createElement(elementType);

    const textNode = document.createTextNode(text);

    newElement.appendChild(textNode);

    parent.appendChild(newElement);
};

const paraToAddBack = document.querySelector("#nothingPara");

taskBtn.addEventListener("click", () => {
    // if the value of the input is an empty string I want to alert the user

    const nothingPara = document.querySelector("#nothingPara");

    if (taskInput.value === "") {
        return alert("Please enter a task");
    }
    console.log(taskInput.value);

    // parnetNode.removeChild(childNode)

    if (nothingPara) {
        console.log(nothingPara, "nothing para");
        taskList.removeChild(nothingPara);
    }

    createElement("p", taskInput.value, taskList);

    // I saved the para in a variable, I can bring it back without having to create it from scratch
    // setTimeout(() => {
    //     taskList.appendChild(paraToAddBack);
    // }, 2000);

    // every time I add something to teh list, I want to clear the input
    taskInput.value = "";
});

// <div>
//  <h3></h3>
//  <p></p>
//  <img src=""/>
// </div>
