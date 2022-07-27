// const password = document.getElementById("password");
// const confirm = document.getElementById("confirm");
// const submit = document.getElementById("submit");

// const logtoc = () => {
//   if (password.value === confirm.value) {
//     open("login.html");
//   } else {
//     alert("passwords not equal");
//   }
// };

// submit.addEventListener("click", logtoc);

////////////////////////////////////////////////////////////////////

const emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\\.[a-z0-9-]+)*/i;

const form = document.getElementById("signup");
form.addEventListener("change", validateForm);

function validateForm() {
  const errors = [];
  if (!form.name.value) {
    errors.push("Name is required");
  }

  if (!emailReg.test(form.email.value)) {
    errors.push("Email is invalid");
  }

  if (!form.password.value || !form.confirm.value) {
    errors.push("passwords must contain atleast 6 characters or more");
  }

  if (form.password.value !== form.confirm.value) {
    errors.push("Passwords do not match");
  }

  RenderErrors(errors);
}

// using native template strings

function RenderErrors(errors = []) {
  const submitButton = document.getElementById("submit");
  if (errors.length > 0) {
    submitButton.disabled = true;
    errorTemplate = `<ul>
    ${errors.map((error) => `<li>${error}</li>`).join("")}
    </ul>`;

    document.getElementById("errors").innerHTML = errorTemplate;
  } else {
    document.getElementById("errors").hidden = true;
    submitButton.disabled = false;
  }
}
