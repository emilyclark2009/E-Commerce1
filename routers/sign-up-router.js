const express = require('express')
const app = express()
const {pool} = require('../db')

const signUpRouter = express.Router()

// the sign up page doesn't ask for the firstname nor lastname (yet) - in the meantime i'll just use null as placeholders 
signUpRouter.post('/sign-up', (req,res)=>{
    pool.query('INSERT INTO Customers (password, first_name, last_name, email) VALUES($1,$2,$3,$4)', [req.body.newPassword, null , null , req.body.newUserName], (err,results)=>{
        if (err){
            console.log(err)
        }
    })
})
