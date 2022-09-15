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
//"Added!" when the user clicks on it. It will also add the item to
//customer's shopping cart

const addConch = document.getElementById("conch");

addConch.addEventListener("click", () =>{
    document.getElementById("conch").innerHTML = "Added!";
    fetch('/cart?shell=conch', {method: "POST"});
    setTimeout(function(){
        document.getElementById("conch").innerHTML = "Add to Cart";
    }, 1000);
    
});

const addBrokenHeart = document.getElementById("brokenHeart");

addBrokenHeart.addEventListener("click", () =>{
    document.getElementById("brokenHeart").innerHTML = "Added!";
    fetch('/cart?shell=brokenHeart', {method: "POST"});
    setTimeout(function(){
        document.getElementById("brokenHeart").innerHTML = "Add to Cart";
    }, 1000);
    
});

const addOceansWail = document.getElementById("oceansWail");

addOceansWail.addEventListener("click", () =>{
    document.getElementById("oceansWail").innerHTML = "Added!";
    fetch('/cart?shell=oceansWail', {method: "POST"});
    setTimeout(function(){
        document.getElementById("oceansWail").innerHTML = "Add to Cart";
    }, 1000);
    
});

const addTinyTitan = document.getElementById("tinyTitan");

addTinyTitan.addEventListener("click", () =>{
    document.getElementById("tinyTitan").innerHTML = "Added!";
    fetch('/cart?shell=tinyTitan', {method: "POST"});
    setTimeout(function(){
        document.getElementById("tinyTitan").innerHTML = "Add to Cart";
    }, 1000);
    
});

const addSailorsBounty = document.getElementById("sailorsBounty");

addSailorsBounty.addEventListener("click", () =>{
    document.getElementById("sailorsBounty").innerHTML = "Added!";
    fetch('/cart?shell=sailorsBounty', {method: "POST"});
    setTimeout(function(){
        document.getElementById("sailorsBounty").innerHTML = "Add to Cart";
    }, 1000);
    
});

const addWhitePrincess = document.getElementById("whitePrincess");

addWhitePrincess.addEventListener("click", () =>{
    document.getElementById("whitePrincess").innerHTML = "Added!";
    fetch('/cart?shell=whitePrincess', {method: "POST"});
    setTimeout(function(){
        document.getElementById("whitePrincess").innerHTML = "Add to Cart";
    }, 1000);
    
});