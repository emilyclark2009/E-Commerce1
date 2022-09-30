//Populate Shopping Cart Functionality
//Builds the page to view your shopping cart items

const populateShoppingCart = cart =>{
    delete cart.id;

    let cartCount = 0;
    let cartValues = Object.values(cart);
    cartValues.forEach(element =>{
        if(element != 0) cartCount += 1;
    });

    if(cartCount === 0){
        let newElement = document.createElement("tr");
        newElement.setAttribute("id", "currentRow");
        let currentElement = document.getElementById("cartTable");
        currentElement.appendChild(newElement);

        let newContent = document.createTextNode("You're cart is empty");
        currentElement.appendChild(newContent);
    }

    for(let [key, value] of Object.entries(cart)){
        if(value === 0){
            continue;
        }else{
            let newElement = document.createElement("tr");
            newElement.setAttribute("id", "currentRow");
            let currentElement = document.getElementById("cartTable");
            currentElement.appendChild(newElement);

            let newContent = document.createElement("img");
            currentElement = document.getElementById("currentRow");

            switch(key){
                case "conch": 
                newElement = document.createElement("td");
                newContent.setAttribute("src", "/img/shell01.jpg");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newContent = document.createTextNode(" " + "The Conch");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newElement = document.createElement("td");
                newContent = document.createTextNode("$10.99");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newElement = document.createElement("td");
                newContent = document.createElement("input");
                newContent.type = "number";
                newContent.setAttribute("value", value);
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);
    
                newElement = document.createElement("td");
                newContent = document.createElement("button");
                newContent.setAttribute("id", "deleteConch");
                newContent.innerHTML = "Delete";
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                document.getElementById("deleteConch").addEventListener("click", () =>{
                    fetch(`/cart?id=${customerInfo.id}&shell=conch`, {method: "DELETE"});
                    document.location.reload(true);
                });
                break;

                case "brokenheart": 
                newElement = document.createElement("td");
                newContent.setAttribute("src", "/img/shell02.jpg");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newContent = document.createTextNode(" " + "The Broken Heart");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newElement = document.createElement("td");
                newContent = document.createTextNode("$5.99");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newElement = document.createElement("td");
                newContent = document.createElement("input");
                newContent.type = "number";
                newContent.setAttribute("value", value);
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);
    
                newElement = document.createElement("td");
                newContent = document.createElement("button");
                newContent.setAttribute("id", "deleteBrokenHeart");
                newContent.innerHTML = "Delete";
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                document.getElementById("deleteBrokenHeart").addEventListener("click", () =>{
                    fetch(`/cart?id=${customerInfo.id}&shell=brokenHeart`, {method: "DELETE"});
                    document.location.reload(true);
                });
                break;

                case "oceanswail": 
                newElement = document.createElement("td");
                newContent.setAttribute("src", "/img/shell03.jpg");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newContent = document.createTextNode(" " + "Ocean's Wail");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newElement = document.createElement("td");
                newContent = document.createTextNode("$19.99");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newElement = document.createElement("td");
                newContent = document.createElement("input");
                newContent.type = "number";
                newContent.setAttribute("value", value);
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);
    
                newElement = document.createElement("td");
                newContent = document.createElement("button");
                newContent.setAttribute("id", "deleteOceansWail");
                newContent.innerHTML = "Delete";
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                document.getElementById("deleteOceansWail").addEventListener("click", () =>{
                    fetch(`/cart?id=${customerInfo.id}&shell=oceansWail`, {method: "DELETE"});
                    document.location.reload(true);
                });
                break;

                case "tinytitan": 
                newElement = document.createElement("td");
                newContent.setAttribute("src", "/img/shell04.jpg");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newContent = document.createTextNode(" " + "The Tiny Titan");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newElement = document.createElement("td");
                newContent = document.createTextNode("$14.99");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newElement = document.createElement("td");
                newContent = document.createElement("input");
                newContent.type = "number";
                newContent.setAttribute("value", value);
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);
    
                newElement = document.createElement("td");
                newContent = document.createElement("button");
                newContent.setAttribute("id", "deleteTinyTitan");
                newContent.innerHTML = "Delete";
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                document.getElementById("deleteTinyTitan").addEventListener("click", () =>{
                    fetch(`/cart?id=${customerInfo.id}&shell=tinyTitan`, {method: "DELETE"});
                    document.location.reload(true);
                });
                break;

                case "sailorsbounty": 
                newElement = document.createElement("td");
                newContent.setAttribute("src", "/img/shell05.jpg");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newContent = document.createTextNode(" " + "Sailor's Bounty");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newElement = document.createElement("td");
                newContent = document.createTextNode("$19.99");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newElement = document.createElement("td");
                newContent = document.createElement("input");
                newContent.type = "number";
                newContent.setAttribute("value", value);
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);
    
                newElement = document.createElement("td");
                newContent = document.createElement("button");
                newContent.setAttribute("id", "deleteSailorsBounty");
                newContent.innerHTML = "Delete";
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                document.getElementById("deleteSailorsBounty").addEventListener("click", () =>{
                    fetch(`/cart?id=${customerInfo.id}&shell=sailorsBounty`, {method: "DELETE"});
                    document.location.reload(true);
                });
                break;

                case "whiteprincess": 
                newElement = document.createElement("td");
                newContent.setAttribute("src", "/img/shell06.jpg");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newContent = document.createTextNode(" " + "White Princess");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newElement = document.createElement("td");
                newContent = document.createTextNode("$24.99");
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                newElement = document.createElement("td");
                newContent = document.createElement("input");
                newContent.type = "number";
                newContent.setAttribute("value", value);
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);
    
                newElement = document.createElement("td");
                newContent = document.createElement("button");
                newContent.setAttribute("id", "deleteWhitePrincess");
                newContent.innerHTML = "Delete";
                newElement.appendChild(newContent);
                currentElement.appendChild(newElement);

                document.getElementById("deleteWhitePrincess").addEventListener("click", () =>{
                    fetch(`/cart?id=${customerInfo.id}&shell=whitePrincess`, {method: "DELETE"});
                    document.location.reload(true);
                });
                break;
            }
            document.getElementById("currentRow").setAttribute("id", "");
        }
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
        populateShoppingCart(cart);

    });
}

fetchCustomerCart();

//Delete Items From Cart Functionality
