const {POOL,Client} = require('pg')
const connectionString = 'postgressql://postgres:postgres@localhost:5432/E-Commerce'

const client = new Client({
    connectionString:connectionString,
})

client.connect()

client.query('SELECT * from customers', (err,res)=>{
    console.log(err,res)
    client.end()
})

