//Log In Box Functionality
//Clicking on "Log In" will execute the following code. This code allows
//for the log in box to appear for a user to type in their username
//and password

const logIn = document.getElementById("logIn");
const logInContainerClose = document.getElementById("logInContainerClose");

logIn.addEventListener("click", ()=>{
    document.getElementById("logInContainer").style.top = "17%";
})

logInContainerClose.addEventListener("click", ()=>{
    document.getElementById("logInContainer").style.top = "-100vh";
})

//Add To Cart Functionality
//This code will change the text within the "Add to Cart" button to
//"Added!" when the user clicks on it