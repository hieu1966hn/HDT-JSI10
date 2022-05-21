const init = () => {
  alert("Hàm init đã được chạy");

  const registerForm = document.getElementById("register-form");
  const loginForm = document.getElementById("login-form");


  registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // giải quyết vđề tự động reload web

    const data = {
      firstName: registerForm.firstName.value,
      lastName: registerForm.lastName.value,
      email: registerForm.email.value,
      password: registerForm.password.value,
      confirmPassword: registerForm.confirmPassword.value
    }

    console.log(data);

    controller(data);
  })

}



window.onload = init;