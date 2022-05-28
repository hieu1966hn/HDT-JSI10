const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = {
    email: loginForm.email.value,
    password: loginForm.password.value,

  }

  console.log(data);
})