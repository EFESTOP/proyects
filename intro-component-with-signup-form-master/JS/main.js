// choosen elemts to manipulate
const fname = document.getElementById("first-name");
const lname = document.getElementById("last-name");
const mail = document.getElementById("mail");
const password = document.getElementById("password");
const btn = document.getElementById("btn-submit");
const boxError = document.querySelectorAll("label");
var index = 0;

// Start Validation
btn.addEventListener("click", validationForm);

// validar el formulario
function validationForm() {
  validationFname();
  validationLname();
  validationMail();
  validationPasword();
  clearInputs();


  // formCorrect();
}

// Dar una alerta de que el formulario esta correcto (CORREGIR)
/*function formCorrect() {
  if (
    validationFname && validationLname && validationMail && validationPasword === true ) {
    alert("The formulary is correct");
    const forms = document.querySelectorAll("input");
    forms.forEach((form) => {
      form.value = "";
    });
  } else {
    alert("The formulary is incorrect");
  }
}  */

// validar el first name
function validationFname() {
  const errorMsg = document.querySelector(".fname-error-msg");

  if (fname.validity.valid) {
    boxError[index].lastElementChild.style.visibility = "hidden";
    fname.placeholder = "First Name";
    fname.style.border = "";
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "First name cannot be empty";
    fname.style.border = "2px solid hsl(0, 100%, 74%)";
    fname.placeholder = " ";
    boxError[index].lastElementChild.style.visibility = "visible";
  }
}

// validar el last name
function validationLname() {
  const errorMsg = document.querySelector(".lname-error-msg");
  if (lname.validity.valid) {
    lname.style.border = "";
    boxError[index + 1].lastElementChild.style.visibility = "hidden";
    lname.placeholder = "Last Name";
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Last name cannot be empty";
    lname.style.border = "2px solid hsl(0, 100%, 74%)";
    boxError[index + 1].lastElementChild.style.visibility = "visible";
    lname.placeholder = " ";
  }
}
// validar el email
mail.addEventListener("input", validationMail)

function validationMail() {
  const errorMsg = document.querySelector(".mail-error-msg");
  if (mail.validity.valid) {
    errorMsg.textContent = "";
    mail.placeholder = "Email Address";
    mail.style.border = "";
    boxError[index + 2].lastElementChild.style.visibility = "hidden";
    mail.style.border = "hsl(246, 25%, 77%) solid 1px";
    mail.classList.remove("error-placeholder");
  } else if (mail.validity.typeMismatch) {
    errorMsg.textContent = "The email addres is not valid";
    mail.style.border = "2px solid hsl(0, 100%, 74%)";
    mail.style.outline = "hsl(0, 100%, 74%)"
    mail.placeholder = "email@example.com";
    boxError[index + 2].lastElementChild.style.visibility = "visible";
    mail.classList.add("error-placeholder");
    
  } else {
    errorMsg.textContent = "The e-mail cannot be empty";
    mail.style.border = "2px solid hsl(0, 100%, 74%)";
    boxError[index + 2].lastElementChild.style.visibility = "visible";
    mail.placeholder = " ";
  }
}
// validar el pasword
function validationPasword() {
  const errorMsg = document.querySelector(".password-error-msg");
  if (password.validity.valid) {
    password.placeholder = "Password";
    password.style.border = "";
    boxError[index + 3].lastElementChild.style.visibility = "hidden";
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Password cannot be empty";
    password.style.border = "2px solid hsl(0, 100%, 74%)";
    boxError[index + 3].lastElementChild.style.visibility = "visible";
    password.placeholder = " ";
  }
}

// vaciar los inputs
const input = document.querySelectorAll(".clear");
function clearInputs() {
  
  input.forEach((e) => {
    e.value = "";
  });
}
