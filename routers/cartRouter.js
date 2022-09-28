const express = require("express");
const {pool} = require('../db.js');

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
        pool.query('UPDATE cart SET conch = conch + 1 WHERE id = $1', [req.query.id]); 
        break;
        case "brokenHeart": shoppingCart["brokenHeart"] += 1;
        pool.query('UPDATE cart SET brokenheart = brokenheart + 1 WHERE id = $1', [req.query.id]);
        break;
        case "oceansWail": shoppingCart["oceansWail"] += 1;
        pool.query('UPDATE cart SET oceanswail = oceanswail + 1 WHERE id = $1', [req.query.id]); 
        break;
        case "tinyTitan": shoppingCart["tinyTitan"] += 1;
        pool.query('UPDATE cart SET tinytitan = tinytitan + 1 WHERE id = $1', [req.query.id]); 
        break;
        case "sailorsBounty": shoppingCart["sailorsBounty"] += 1;
        pool.query('UPDATE cart SET sailorsbounty = sailorsbounty + 1 WHERE id = $1', [req.query.id]); 
        break;
        case "whitePrincess": shoppingCart["whitePrincess"] += 1;
        pool.query('UPDATE cart SET whiteprincess = whiteprincess + 1 WHERE id = $1', [req.query.id]); 
        break;
    }
    console.log(shoppingCart);
});

module.exports = cartRouter;