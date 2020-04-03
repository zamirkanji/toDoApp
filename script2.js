let input = document.getElementById("input");
let enter = document.getElementById("enter");
let ol = document.querySelector("ol");
let li = document.querySelectorAll("li");
const container = document.querySelector(".body-container");
let clear = document.getElementById("clear-all");
let listBox = document.querySelector(".list-box");



function inputLength() {
  return input.value.length;
}


function createListElement() {
  let listItemDiv = document.createElement("div");
  listItemDiv.className = "button-div";

  let li = document.createElement("li");
  li.className = "list-item cross-out";
  li.appendChild(document.createTextNode(input.value));
  input.value = "";
  listItemDiv.appendChild(li);

  let deleteBtn = document.createElement("BUTTON");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.className = "delete-btn";
  li.appendChild(deleteBtn);

  document.querySelector("ol").appendChild(listItemDiv);
  listItemDiv.appendChild(deleteBtn);
}


function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
    // showClearBtn();
  }
}

function addListAfterEnter(e) {
  if (inputLength() > 0 && e.keyCode === 13) {
    createListElement();

    console.log(e);
  }
}


ol.addEventListener("click", (event) => {
  if (event.target.matches("li")) {
    event.target.classList.toggle("done");
    event.target.classList.toggle("black");

    console.log(event);
  }
});


function deleteItem() {
  li.innerHTML = "";
  deleteBtn.parentElement = "";
}



function removeAll() {
  li.innerHTML = "";
  ol.innerHTML = "";
}

function showClearBtn() {
  let show = document.getElementById("clear-all");
  show.style.visibility = "visible";
}

function hideClearBtn() {
  let hide = document.getElementById("clear-all");
  hide.style.visibility = "hidden";
}


clear.addEventListener("click", removeAll);
clear.addEventListener("click", hideClearBtn);

enter.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);
enter.addEventListener("click", showClearBtn);
input.addEventListener("keypress", showClearBtn);



function delete_row(e) {
  // let listItem = this.parentElement;
  // let ol = listItem.parentElement;
  // ol.removeChild(listItem);

  let listItemRow = document.querySelector(".button-div");
  listItemRow.innerHTML = "";
  console.log(e);
}


deleteBtn.addEventListener("click", delete_row);