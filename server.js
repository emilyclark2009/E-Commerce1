const express = require('express');
const app = express();
const { pool } = require('./db.js')
const pageRouter = require("./routers/pageRouter.js");
const cartRouter = require("./routers/cartRouter.js");
const signUpLogInRouter = require("./routers/signUpLogInRouter.js");

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

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
