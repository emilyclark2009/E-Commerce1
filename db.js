
const {Pool} = require('pg')

// const connectionString = `postgresql://qluoipagapiyye:7deddd8775b44cfbcdaa549b40edfaa0257f687bbc159ed95dd10799a370a7fa@5432/d9b8rmbfobg3i6`;


// fill in the values accordingly to establish a DB connection
const pool = new Pool({
    //connectionString: connectionString,
    user: 'qluoipagapiyye',
  host: 'ec2-34-231-42-166.compute-1.amazonaws.com',
  database: 'd9b8rmbfobg3i6',
  password: '7deddd8775b44cfbcdaa549b40edfaa0257f687bbc159ed95dd10799a370a7fa',
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }

})


module.exports = {pool}
