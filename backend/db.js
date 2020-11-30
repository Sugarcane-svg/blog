//this package will allow us to work with postgres in node
const { Pool } = require('pg'); //distructure. 
//this is the same as: const Pool = require('pg').Pool;

const connectionString = 'postgres://wizyfppi:iw_UK_eseLpJJM5xS62_V126xqJXRBTn@suleiman.db.elephantsql.com:5432/wizyfppi';
//inside is the url from the one just created

const pool = new Pool({ connectionString });

module.exports = pool;

//done, go back to server.js