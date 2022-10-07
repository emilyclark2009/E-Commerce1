const express = require('express');
const app = express();
const { pool } = require('./db.js')
const pageRouter = require("./routers/pageRouter.js");
const cartRouter = require("./routers/cartRouter.js");
const signUpLogInRouter = require("./routers/signUpLogInRouter.js");
const addressRouter = require("./routers/addressRouter.js");
const passport = require("passport")
const session = require("express-session")

app.use(session({
    secret:"test",
    saveUninitialized: true,
    cookie: {secure: false},
    resave: false,
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.static("public"));

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get("/", (req, res, next) => {
    res.render("index.ejs");
});

app.set("view engine", "ejs");

app.use("/pageRouter", pageRouter);

app.use("/signUpLogIn", signUpLogInRouter);

app.use("/cart", cartRouter);

app.use("/addresses", addressRouter);



const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
