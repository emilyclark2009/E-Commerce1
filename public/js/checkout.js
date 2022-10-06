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
        document.getElementById("userCart").innerHTML = `${customerInfo.first_name}'s Shopping Cart`;
    });
}

fetchCustomerInfo();