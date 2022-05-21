const controller = {}

controller.register = (data) => {

  if (data.firstName.trim() === "") {
    document.getElementById("first-name-error").innerText
      = "*Please input first name";
  }

}



controller.login = (data) => {

}


console.log("controller: ", controller);