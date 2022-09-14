//Log In Box Functionality
//Clicking on "Log In" will execute the following code. This code allows
//for the log in box to appear for a user to type in their username
//and password

const logIn = document.getElementById("logIn");
const logInContainerClose = document.getElementById("logInContainerClose");
const logInSubmit = document.getElementById("submit");
const welcomeContainer = document.getElementById("welcome");

logIn.addEventListener("click", ()=>{
    document.getElementById("logInContainer").style.top = "17%";
})

logInContainerClose.addEventListener("click", ()=>{
    document.getElementById("logInContainer").style.top = "-100vh";
})

logInSubmit.addEventListener("click", ()=> {
    const email = document.getElementById("email").value;
    welcomeContainer.innerHTML += "Welcome " + email;
    document.getElementById("logInContainer").style.top = "-100vh";
    

})