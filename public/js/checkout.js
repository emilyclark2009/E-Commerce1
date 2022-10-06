const caTaxRate = .0975;
const shippingHandling = 4.99;

const shellPrices = {
    "conch": 10.99,
    "brokenHeart": 5.99,
    "oceansWail": 19.99,
    "tinyTitan": 14.99,
    "sailorsBounty": 19.99,
    "whitePrincess": 24.99
}

const roundTo = (number, digits) =>{
    const d = Math.pow(10, digits);
    return Math.round((number + Number.EPSILON) * d)/ d;
}

const buildCheckoutList = (name, value, price) =>{
    let newElement = document.createElement("tr");
    newElement.setAttribute("id", "currentRow");
    let currentElement = document.getElementById("checkoutTable");
    currentElement.appendChild(newElement);
    currentElement = document.getElementById("subtotalRow");
    currentElement.before(newElement);

    newElement = document.createElement("td");
    currentElement = document.getElementById("currentRow");
    currentElement.appendChild(newElement);
    let newContent = document.createTextNode(name);
    newElement.appendChild(newContent);

    newElement = document.createElement("td");
    newContent = document.createTextNode(value);
    newElement.appendChild(newContent);
    currentElement.appendChild(newElement);

    newElement = document.createElement("td");
    newContent = document.createTextNode("$" + price);
    newElement.appendChild(newContent);
    currentElement.appendChild(newElement);

    newElement = document.createElement("td")
    newContent = document.createTextNode("$" + value * price);
    newElement.appendChild(newContent);
    currentElement.appendChild(newElement);
}

const populateCheckout = cart =>{
    delete cart.id;

    for(let [key, value] of Object.entries(cart)){
        if(value === 0){
            continue;
        }else{
            switch(key){
                case "conch":
                    buildCheckoutList("The Conch", value, shellPrices["conch"]);
                    break;
                case "brokenheart":
                    buildCheckoutList("Broken Heart", value, shellPrices["brokenHeart"]);
                    break;
                case "oceanswail":
                    buildCheckoutList("Ocean's Wail", value, shellPrices["oceansWail"]);
                    break;
                case "tinytitan":
                    buildCheckoutList("Tiny Titan", value, shellPrices["tinyTitan"]);
                    break;
                case "sailorsbounty":
                    buildCheckoutList("Sailor's Bounty", value, shellPrices["sailorsBounty"]);
                    break;
                case "whiteprincess":
                    buildCheckoutList("White Princess", value, shellPrices["whitePrincess"]);
                    break;
            }
            document.getElementById("currentRow").setAttribute("id", "");
        }
        let subtotal = (cart.conch * shellPrices["conch"]) + (cart.brokenheart * shellPrices["brokenHeart"]) + (cart.oceanswail * shellPrices["oceansWail"]) + (cart.tinytitan * shellPrices["tinyTitan"]) + (cart.sailorsbounty * shellPrices["sailorsBounty"]) + (cart.whiteprincess * shellPrices["whitePrincess"]);
        subtotal = roundTo(subtotal, 2);
        document.getElementById("subtotal").innerHTML = "$" + subtotal;
        let taxes = subtotal * caTaxRate;
        taxes = roundTo(taxes, 2);
        document.getElementById("taxes").innerHTML = "$" + taxes;
        let finalTotal = subtotal + taxes + shippingHandling;
        finalTotal = roundTo(finalTotal, 2);
        document.getElementById("finalTotal").innerHTML = "$" + finalTotal;
    }
}

//Builds the checkout table
const buildCheckout = () =>{
    let customerInfo = null;
    let cart = null;
    fetch("/signUpLogIn", { method: "GET"})
    .then(response =>{
        if(response.ok) return response.json();
    
        renderError(response);
    })
    .then(response =>{
        customerInfo = response.customerInfo;
        fetch(`/cart?id=${customerInfo.id}`, { method: "GET"})
        .then(response =>{
            if(response.ok) return response.json();

            renderError(response);
        })
        .then(response =>{
        cart = response;
        populateCheckout(cart);
        });
    });
}

buildCheckout();