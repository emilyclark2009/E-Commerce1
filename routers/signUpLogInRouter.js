const express = require('express');
const {pool} = require('../db.js');

const signUpLogInRouter = express.Router()

const login = {
    loggedIn: false,
    customerInfo: ''
};

//POST to add email, password, first name, and last name of new user to database 
signUpLogInRouter.post("/", (req,res)=>{
    console.log(req.body.newUserName)

    // Form Validation - making sure the email isn't in use (gotta say, ejs turned out to be pretty awesome)
    pool.query('SELECT * FROM customers WHERE email = $1', [req.body.newUserName], (err, results)=>{
        let errors = [];
        console.log("selected");
        
        if(err) console.log(err);

        console.log(results.rows);
        console.log('Attempt has been made');

        if (results.rows.length > 0) errors.push({message: "Email is already registered"});

        if (errors.length > 0) {
            res.render("signup.ejs", {errors});
        }else{ // Validation has passed
            pool.query('INSERT INTO customers  (password, first_name, last_name, email) VALUES($1,$2,$3,$4) RETURNING email', [req.body.newPassword, req.body.newFirstName, req.body.newLastName, req.body.newUserName], (err,results)=>{
            if (err){
                console.log(err);
            }else{
                console.log("Query Success!");
                console.log(results.rows);
                }
            })
            pool.query('SELECT * FROM customers WHERE email = $1', [req.body.newUserName], (err, results)=>{  
                login.customerInfo = results.rows[0];
                login.loggedIn = true;
                pool.query('INSERT INTO cart (id, conch, brokenheart, oceanswail, tinytitan, sailorsbounty, whiteprincess) VALUES($1,$2,$3,$4,$5,$6,$7)', [login.customerInfo.id, 0, 0, 0, 0, 0, 0]);
                res.render('signUpConfirm.ejs');
            })
        }
    })   
})

signUpLogInRouter.get('/', (req, res, next) =>{
    res.send(login);
});

signUpLogInRouter.get('/logIn', (req, res, next) =>{
    pool.query('SELECT * FROM customers WHERE email = $1', [req.query.email], (err, results) =>{
        let errors = [];
        login.customerInfo = results.rows[0];
        if(login.customerInfo.email != req.query.email) errors.push({message: "Invalid Email"});
        if(login.customerInfo.password === req.query.password){
            login.loggedIn = true;
            res.render('index.ejs');
        }else{
            errors.push({message: "Invalid Password"});
        }
        if (errors.length > 0) {
            res.send({errors});
        }
    });
});

module.exports = signUpLogInRouter;