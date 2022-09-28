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

//Updates Welcome message to include users name. Also tells the page that
//the user is logged in, creating a shopping cart and allowing for the 
//user to add items to their shopping cart
let loggedIn = false;
let customerInfo = null;

const updateGreeting = () =>{
    fetch("/signUpLogIn", { method: "GET"})
    .then(response =>{
        if(response.ok) return response.json();
    
        renderError(response);
    })
    .then(response =>{
        loggedIn = response.loggedIn;
        customerInfo = response.customerInfo;
        console.log(customerInfo);
        if(loggedIn){
            document.getElementById("helloUser").innerHTML = `Welcome ${customerInfo.first_name}!`;
        }
    });
}

updateGreeting();


//Add To Cart Functionality
//This code will change the text within the "Add to Cart" button to
//"Added!" when the user clicks on it. It will also add the item to
//customer's shopping cart. However, if loggedIn is false, clicking on
//"Add to Cart" will scroll the page to the top and open the sign in box

const addConch = document.getElementById("conch");

addConch.addEventListener("click", () =>{
    if(loggedIn === true){
        document.getElementById("conch").innerHTML = "Added!";
        fetch('/cart?shell=conch', {method: "POST"});
        setTimeout(function(){
            document.getElementById("conch").innerHTML = "Add to Cart";
        }, 1000);
    }else{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        logIn.click();
    }
});

const addBrokenHeart = document.getElementById("brokenHeart");

addBrokenHeart.addEventListener("click", () =>{
    if(loggedIn === true){
        document.getElementById("brokenHeart").innerHTML = "Added!";
        fetch('/cart?shell=brokenHeart', {method: "POST"});
        setTimeout(function(){
            document.getElementById("brokenHeart").innerHTML = "Add to Cart";
        }, 1000);
    }else{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        logIn.click();
    }
});

const addOceansWail = document.getElementById("oceansWail");

addOceansWail.addEventListener("click", () =>{
    if(loggedIn === true){
        document.getElementById("oceansWail").innerHTML = "Added!";
        fetch('/cart?shell=oceansWail', {method: "POST"});
        setTimeout(function(){
            document.getElementById("oceansWail").innerHTML = "Add to Cart";
        }, 1000);
    }else{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        logIn.click();
    }
});

const addTinyTitan = document.getElementById("tinyTitan");

addTinyTitan.addEventListener("click", () =>{
    if(loggedIn === true){
        document.getElementById("tinyTitan").innerHTML = "Added!";
        fetch('/cart?shell=tinyTitan', {method: "POST"});
        setTimeout(function(){
            document.getElementById("tinyTitan").innerHTML = "Add to Cart";
        }, 1000);
    }else{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        logIn.click();
    }
});

const addSailorsBounty = document.getElementById("sailorsBounty");

addSailorsBounty.addEventListener("click", () =>{
    if(loggedIn == true){
        document.getElementById("sailorsBounty").innerHTML = "Added!";
        fetch('/cart?shell=sailorsBounty', {method: "POST"});
        setTimeout(function(){
            document.getElementById("sailorsBounty").innerHTML = "Add to Cart";
        }, 1000);
    }else{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        logIn.click();
    }
});

const addWhitePrincess = document.getElementById("whitePrincess");

addWhitePrincess.addEventListener("click", () =>{
    if(loggedIn === true){
        document.getElementById("whitePrincess").innerHTML = "Added!";
        fetch('/cart?shell=whitePrincess', {method: "POST"});
        setTimeout(function(){
            document.getElementById("whitePrincess").innerHTML = "Add to Cart";
        }, 1000);
    }else{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        logIn.click();
    }
});

logInSubmit.addEventListener("click", ()=> {
    const email = document.getElementById("email").value;
    welcomeContainer.innerHTML += "Welcome " + email;
    document.getElementById("logInContainer").style.top = "-100vh";
})

