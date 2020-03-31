let input = document.getElementById("input");
let enter = document.getElementById("enter");
let ol = document.querySelector("ol");
let li = document.querySelectorAll("li");
const container = document.querySelector(".body-container");
const clear = document.getElementById("clear-all");
let listBox = document.querySelector(".list-box");
// let listBtn = document.querySelector(".list-btn");


function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");

  li.className = "list-btn fade-in";
  li.appendChild(document.createTextNode(input.value));
  // document.createElement(listBtn);
  // li.appendChild(deleteListItem); // ???
  // let listBtn = li.appendChild(deleteListItem);
  // listBtn.appendChild(li);
  // ol.appendChild(listBtn);
  ol.appendChild(li);
  input.value = "";
}

function createBtnElement() {
  let deleteListItem = document.createElement("BUTTON");
  deleteListItem.innerHTML = "Delete";
  deleteListItem.className = "list-btn delete-li-btn";
  // btn.className = "delete-btn";
  // listBtn.appendChild(deleteListItem);
  ol.appendChild(deleteListItem);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
    createBtnElement(); //?
  }
}

function addListAfterEnter(e) {
  if (inputLength() > 0 && e.keyCode === 13) {
    createListElement();
    createBtnElement(); //?
  }
}

function removeAll() {
  listBox.innerHTML = "";
}

ol.addEventListener("click", (event) => {
  if (event.target.matches("li")) {
    event.target.classList.toggle("done");
    event.target.classList.toggle("black");
  }
})

// Event Listeners (callback functions)
enter.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);
// enter.addEventListener("click", addListAfterClick, createListBtn);
// input.addEventListener("keypress", addListAfterEnter, createListBtn);
clear.addEventListener("click", removeAll);
deleteListItem.addEventListener("click", deleteItem);


//new function to when li is created (input.value.length > 1) create button next to list item and when button is clicked it deletes said list item

function deleteItem() {
  li.innerHTML = "";
}

// function createListBtn() {
//   ol.createElement(listBtn);
// }


// button needs to be appended to ol