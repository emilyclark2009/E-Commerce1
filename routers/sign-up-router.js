const express = require('express')
const app = express()
const {pool} = require('../db.js')

const signUpRouter = express.Router()

//POST to add email, password, first name, and last name of new user to database 
signUpRouter.post("/", (req,res)=>{
    console.log(req.body.newUserName)

    // Form Validation - making sure the email isn't in use (gotta say, ejs turned out to be pretty awesome)
    pool.query('SELECT * FROM customers WHERE email = $1', [req.body.newUserName], (err, results)=>{
        let errors = [];
        console.log("selected")
        
        if(err){
            console.log(err)
        }
        console.log(results.rows)
        console.log('Attempt has been made')

        if (results.rows.length > 0) {
            errors.push({message: "Email is already registered"})
        }

        if (errors.length > 0) {
            res.render("signup.ejs", {errors})
        }
        // Validation has passed

        else {
        pool.query('INSERT INTO Customers  (password, first_name, last_name, email) VALUES($1,$2,$3,$4) RETURNING email', [req.body.newPassword, req.body.newFirstName, req.body.newLastName, req.body.newUserName], (err,results)=>{
        if (err){
            console.log(err)
        }
        else {
            console.log("Query Success!")
            console.log(results.rows)
            // renders placeholder page for now
            res.render('placeholder.ejs')
        }
    })
}
    })
    
})

module.exports = signUpRouter;