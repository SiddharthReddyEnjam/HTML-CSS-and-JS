const dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach((el) => el.addEventListener("click", handleClick));

function handleClick(e) {
  e.preventDefault();
  const classList = e.currentTarget.classList;
  classList.toggle("dropdown-open");
}
