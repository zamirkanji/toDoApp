let input = document.getElementById("input");
let enter = document.getElementById("enter");
let ol = document.querySelector("ol");
let li = document.querySelectorAll("li");
const container = document.querySelector(".body-container");
let clear = document.getElementById("clear-all");
let listBox = document.querySelector(".list-box");

+ new Date();

function inputLength() {
  return input.value.length;
}


function createListElement() {
  let listItemDiv = document.createElement("div");
  listItemDiv.className = "button-div";

  listBox.appendChild(listItemDiv); // *** //


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


  deleteBtn.addEventListener("click", function delete_row() {
    let listItem = this.parentElement; //deletebtn is appended to div... and "this" refers to functions OWNER (parent)... so deleteBtn's parent is listItemDiv... then listbox removeChild removes each div individually...

    listBox.removeChild(listItem); //listbox removes each div (div is selected with this.parentElement) - removeChild wasnt working before because each div was not appended to the list box as a whole. ***
  });
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
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