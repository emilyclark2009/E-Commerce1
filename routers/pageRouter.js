const express = require("express");
const pageRouter = express.Router();

pageRouter.get("/signup", (req, res) => {
    res.render('signup.ejs')
});

pageRouter.get("/index", (req, res) => {
    res.render('index.ejs')
});

pageRouter.get("/cart", (req, res) => {
    res.render('cart.ejs')
});

pageRouter.get("/checkout", (req, res) => {
    res.render('checkout.ejs')
});

pageRouter.get("/account", (req, res) => {
    res.render('account.ejs')
});

pageRouter.get("/signUpConfirm", (req, res) =>{
    res.render('signUpConfirm.ejs')
});

pageRouter.get("/addNewAddress", (req, res, next) =>{
    res.render('addNewAddress.ejs');
});

pageRouter.get("/loggedOut", (req, res, next) =>{
    res.render('loggedOut.ejs');
});

pageRouter.get("/updateEmail", (req, res, next) =>{
    res.render('updateEmail.ejs');
});

module.exports = pageRouter;