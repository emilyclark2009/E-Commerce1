//Check For Empty Shopping Cart Functionality
//Checks to see if there's items in your cart to display dynamic message
const shoppingCartCheck = cart =>{
    if(cart["conch"] === 0 && cart["brokenheart"] === 0 && cart["oceanswail"] === 0 && cart["tinytitan"] === 0 && cart["sailorsbounty"] === 0 && cart["whiteprincess"] === 0) return false;
    return true;
}

//Populate Shopping Cart Functionality
//Builds the page to view your shopping cart items

const populateShoppingCart = cartStatus =>{
    if(cartStatus){
        document.getElementById("cartItems").innerHTML = "There's stuff in your cart."
    }else{
        document.getElementById("cartItems").innerHTML = "You have no items in your shopping cart.";
    }
}

//Fetch Customer Info Functionality
//Fetches customer information to be used on page
let customerInfo = null;

const fetchCustomerInfo = () =>{
    fetch("/signUpLogIn", { method: "GET"})
    .then(response =>{
        if(response.ok) return response.json();
    
        renderError(response);
    })
    .then(response =>{
        customerInfo = response.customerInfo;
        console.log(customerInfo);
        document.getElementById("userCart").innerHTML = `${customerInfo.first_name}'s Shopping Cart`;
    });
}

fetchCustomerInfo();

//Fetch Customer Cart Info Funcionality
//Fetches customer cart data such as what items they've selected and
//how much of each item is in their cart
let cart = null;

const fetchCustomerCart = () =>{
    fetch("/cart", { method: "GET"})
    .then(response =>{
        if(response.ok) return response.json();

        renderError(response);
    })
    .then(response =>{
        cart = response;
        console.log(cart);
        const cartStatus = shoppingCartCheck(cart);
        console.log(cartStatus);
        populateShoppingCart(cartStatus);
        
    });
}

fetchCustomerCart();



