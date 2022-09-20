const express = require('express');
const app = express();
const { pool } = require('./db.js')
const cartRouter = require("./routers/cartRouter.js");
const signUpRouter = require("./routers/sign-up-router.js");

app.use(express.static("public"));

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.set("view engine", "ejs");

app.use("/signUp", signUpRouter);

app.use("/cart", cartRouter);


app.get("/", (req, res, next) => {
    res.render("index.ejs");
    /*
    pool.query("SELECT * FROM customers;", (err, results)=>{
        if (err){
            console.log('all bad')
            return console.log(err)
        }
    console.log('all good')
        console.log(results.rows)
    }) */
});


// possibly sperate these routes into a seperate router?

app.get("/signup", (req, res) => {
    res.render('signup.ejs')
})

app.get("/index", (req, res) => {
    res.render('index.ejs')
})

app.get("/cart", (req, res) => {
    res.render('cart.ejs')
})

app.get("/checkout", (req, res) => {
    res.render('checkout.ejs')
})

app.get("/account", (req, res) => {
    res.render('account.ejs')
})


//



const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
