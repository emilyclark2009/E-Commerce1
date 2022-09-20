const express = require('express');
const app = express();
const { pool } = require('./db.js')
const pageRouter = require("./routers/pageRouter.js");
const cartRouter = require("./routers/cartRouter.js");
const signUpRouter = require("./routers/sign-up-router.js");

app.use(express.static("public"));

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get("/", (req, res, next) => {
    res.render("index.ejs");
});

app.set("view engine", "ejs");

app.use("/pageRouter", pageRouter);

app.use("/signUp", signUpRouter);

app.use("/cart", cartRouter);


    /*
    pool.query("SELECT * FROM customers;", (err, results)=>{
        if (err){
            console.log('all bad')
            return console.log(err)
        }
    console.log('all good')
        console.log(results.rows)
    }) */


const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
