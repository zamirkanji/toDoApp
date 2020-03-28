let input = document.getElementById("input");
let button = document.getElementById("enter");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
// let newli = document.querySelector("newli");
const container = document.querySelector(".body-container");
const clear = document.getElementsByClassName(".clear-all");


function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

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

function removeAll() {
  li.innerHTML = "";
  newli.innerHTML = "";
}

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function () {
    li[i].classList.toggle("done");
  });
}

// for (let i = 0; i < newli.length; i++) {
//   newli[i].addEventListener("click", function () {
//     newli[i].classList.toggle("done");
//   });
// }

// Event Listeners (callback functions)
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);
// clear.addEventListener("click", removeAll);


//new function to when li is created (input.value.length > 1) create button next to list item and when button is clicked it deletes said list item

// function createBtnElement() {
// 	let btn = document.createElement("BUTTON");
// 	btn.innerHTML = "Delete Item";
// 	// btn.className = "delete-btn";
// 	allListItems.appendChild(btn);
// }