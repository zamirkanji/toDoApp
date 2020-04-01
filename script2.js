// FUNCTIONS HAVE THEIR OWN SCOPE!!!!!


let input = document.getElementById("input");
let enter = document.getElementById("enter");
let ol = document.querySelector("ol");
let li = document.querySelectorAll("li");
const container = document.querySelector(".body-container");
let clear = document.getElementById("clear-all");
let listBox = document.querySelector(".list-box");
// let listBtn = document.querySelector(".list-btn");


function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  li.className = "list-item cross-out";
  li.appendChild(document.createTextNode(input.value));
  ol.appendChild(li);
  input.value = "";
  li.onclick = createDeleteBtn;



  // deleteBtn.addEventListener("click", deleteItem);
  // deleteBtn.onclick = delete_row();
}

function createDeleteBtn() {
  let deleteBtn = document.createElement("BUTTON");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.className = "delete-btn";
  listBox.appendChild(deleteBtn);

  let x = document.querySelector(".delete-btn");
  let o = document.querySelector(".list-box")
  if (x.style.display === "none") {
    x.style.display = "block";
    o.appendChild(deleteBtn);
  } else {
    x.style.display = "none";
  }


}


// function delete_row() {
//   let listItem = this.parentElement;
//   let ol = listItem.parentElement;
//   ol.removeChild(listItem);
// }


function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
    // createBtnElement(); //?
  }
}

function addListAfterEnter(e) {
  if (inputLength() > 0 && e.keyCode === 13) {
    createListElement();
    // createDeleteBtn();
  }
}



ol.addEventListener("click", (event) => {
  if (event.target.matches("li")) {
    event.target.classList.toggle("done");
    event.target.classList.toggle("black");

    // let x = document.querySelector(".delete-btn");
    // let o = document.querySelector(".list-box")
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    //   o.appendChild(deleteBtn);
    // } else {
    //   x.style.display = "none";
    // }
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

clear.addEventListener("click", removeAll);

// Event Listeners (callback functions)
enter.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);




