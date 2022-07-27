const deleteButton = document.getElementById("delete");
const actionTab = document.querySelector(".action-tab");

deleteButton.addEventListener("click", formOpen);

function formOpen() {
  actionTab.classList.add("action-open");
  document.getElementById("overlay").style.display = "block";
}

// FOR CLOSING THE FORM WITH CANCEL
const cancelButton = document.querySelector(".cancel-button");
const overClick = document.getElementById("overlay");

const formClose = () => {
  actionTab.classList.remove("action-open");
  document.getElementById("overlay").style.display = "none";
};

cancelButton.addEventListener("click", formClose);
overClick.addEventListener("click", formClose);
