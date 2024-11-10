const loginDiv = document.getElementById("login-div");
const registerDiv = document.getElementById("registration-div");

const goToLoginButton = document.getElementById("go-to-login-button");
const goToRegisterButton = document.getElementById("go-to-register-button");

goToLoginButton.addEventListener("click", (event) => {
  registerDiv.style.display = "none";
  loginDiv.style.display = "block";
});

goToRegisterButton.addEventListener("click", (event) => {
  loginDiv.style.display = "none";
  registerDiv.style.display = "block";
});

const form = document.getElementById("registration-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordRepeat = document.getElementById("password-repeat").value;

  if (!validateEmail(email)) {
    showError("Неверный формат email");
    return;
  }

  if (password.length < 8) {
    showError("Пароль должен быть не менее 8 символов");
    return;
  }

  if (password !== passwordRepeat) {
    showError("Пароли не совпадают");
    return;
  }
});

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function showError(message) {
  const errorElement = document.createElement("div");
  errorElement.classList.add("error");
  errorElement.textContent = message;

  const formContainer = document.querySelector(".registration-form-container");
  formContainer.appendChild(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, 3000);
}
