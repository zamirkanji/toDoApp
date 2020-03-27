let input = document.getElementById("input");
let button = document.getElementById("enter");
let ul = document.querySelector("ul");
let listItem = document.querySelectorAll("li");
const container = document.querySelector(".body-container");
// let listBox = document.querySelector(".list-box");

// let listItemsTest = listItem; // ???

function inputLength() {
  return input.value.length;
}

function createListElement() {
  let listItem = document.createElement("li");
  // let allListItems = listItem.querySelectorAll("li");
  listItem.appendChild(document.createTextNode(input.value));
  ul.appendChild(listItem);
  input.value = "";
}

function showListBox() {
  ul.classList.add("list-Box");
}

// function createBtnElement() {
// 	let btn = document.createElement("BUTTON");
// 	btn.innerHTML = "Delete Item";
// 	// btn.className = "delete-btn";
// 	allListItems.appendChild(btn);
// }

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
    // showListBox();
    // createBtnElement(); //?
  }
}
function addListAfterEnter(e) {
  if (inputLength() > 0 && e.keyCode === 13) {
    createListElement();
    // showListBox();
    // createBtnElement(); //?
  }
}

// Event Listeners (callback functions)
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("click", function () {
    listItem[i].classList.toggle("done");
  });
}

//new function to when li is created (input.value.length > 1) create button next to list item and when button is clicked it deletes said list item
