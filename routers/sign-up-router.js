const express = require('express')
const app = express()
const {pool} = require('../db')

const signUpRouter = express.Router()

//POST to add email, password, first name, and last name of new user to database 
signUpRouter.post("/", (req,res)=>{
    pool.query('INSERT INTO Customers (password, first_name, last_name, email) VALUES($1,$2,$3,$4)', [req.body.newPassword, [req.body.newFirstName], [req.body.newLastName] , req.body.newUserName], (err,results)=>{
        if (err){
            console.log(err)
        }
    })
})
