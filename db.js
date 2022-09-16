
const {Pool} = require('pg')


// fill in the values accordingly to establish a DB connection
const pool = new Pool({
    user: 'qluoipagapiyye',
    password: '7deddd8775b44cfbcdaa549b40edfaa0257f687bbc159ed95dd10799a370a7fa',
    host: 'ec2-34-231-42-166.compute-1.amazonaws.com',
    port: '5432', 
    database: 'd9b8rmbfobg3i6'
})


module.exports = {pool}
