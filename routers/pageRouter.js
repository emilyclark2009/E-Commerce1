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

module.exports = pageRouter;