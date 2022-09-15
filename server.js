const express = require('express');
const app = express();
const {pool} = require('./db.js')

app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res, next) =>{
	res.render("index");
});

const signUpRouter = require("./routers/sign-up-router.js");
app.use("/signUp", signUpRouter);

const cartRouter = require("./routers/cartRouter.js");
app.use("/cart", cartRouter);

const PORT = process.env.PORT || 4001;

app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`);
});
