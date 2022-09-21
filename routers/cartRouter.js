const express = require("express");
const cartRouter = express.Router();

const shoppingCart = {
    "conch": 0,
    "brokenHeart": 0,
    "oceansWail": 0,
    "tinyTitan": 0,
    "sailorsBounty": 0,
    "whitePrincess": 0
}

cartRouter.get("/", (req, res, next) =>{
   res.send({shoppingCart: shoppingCart}); 
});

cartRouter.post("/", (req, res, next) =>{
    const shell = req.query.shell;
    switch(shell){
        case "conch": shoppingCart["conch"] += 1;
        break;
        case "brokenHeart": shoppingCart["brokenHeart"] += 1;
        break;
        case "oceansWail": shoppingCart["oceansWail"] += 1;
        break;
        case "tinyTitan": shoppingCart["tinyTitan"] += 1;
        break;
        case "sailorsBounty": shoppingCart["sailorsBounty"] += 1;
        break;
        case "whitePrincess": shoppingCart["whitePrincess"] += 1;
        break;
    }
    //We can replace console.log with a pool database shopping cart update when ready
    console.log(shoppingCart);
});

module.exports = cartRouter;