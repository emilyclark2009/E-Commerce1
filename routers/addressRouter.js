const express = require("express");
const {pool} = require('../db.js');

const addressRouter = express.Router();

addressRouter.get("/", (req, res, next) =>{
    pool.query('SELECT * FROM addresses WHERE id = $1', [req.query.id], (err, results) =>{
        if(err){
            console.log(err);
        }else{
            const addresses = results.rows[0];
            res.send(addresses);
        }
    });
});


module.exports = addressRouter;