let input = document.getElementById("input");
let button = document.getElementById("enter");
let ol = document.querySelector("ol");
let li = document.querySelectorAll("li");
const container = document.querySelector(".body-container");
const clear = document.getElementById("clear-all");
let listBox = document.querySelector(".list-box");


function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  li.className = "fade-in";
  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
    // createBtnElement(); //?
  }
}

function addListAfterEnter(e) {
  if (inputLength() > 0 && e.keyCode === 13) {
    createListElement();
    // createBtnElement(); //?
  }
}

function removeAll() {
  listBox.innerHTML = "";
}

ol.addEventListener("click", (event) => {
  if (event.target.matches("li")) {
    event.target.classList.toggle("done")
  }
})

// Event Listeners (callback functions)
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);
clear.addEventListener("click", removeAll);


//new function to when li is created (input.value.length > 1) create button next to list item and when button is clicked it deletes said list item

// function createBtnElement() {
// 	let btn = document.createElement("BUTTON");
// 	btn.innerHTML = "Delete Item";
// 	// btn.className = "delete-btn";
// 	allListItems.appendChild(btn);
// }