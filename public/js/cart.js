const emptyCart = document.getElementById("emptyCart");

const shoppingCartCheck = cart =>{
    let itemCount = 0;
    for(let i in cart){
        itemCount += 1;
    }
    if(itemCount > 0) return true;
    
    return false;
}


const fetchShoppingCart = () =>{
    fetch("/cart", { method: "GET"})
    .then(response =>{
        if(response.ok) return response.json();

        renderError(response);
    })
    .then(response =>{
        shoppingCart = response.shoppingCart;
        if(shoppingCartCheck(shoppingCart)){
            
            emptyCart.style.visibility = "hidden";
            const newDiv = document.createElement("div");
            const newContent = document.createTextNode("Conch: " + shoppingCart.conch);
            newDiv.appendChild(newContent);
            document.body.insertBefore(newDiv);
            
        }

       
    })
}

fetchShoppingCart();