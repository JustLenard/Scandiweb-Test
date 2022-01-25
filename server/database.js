const Pool = require('pg').Pool;

const connection = new Pool({
	connectionString: process.env.DATABASE_URL,
});

// connection.connect();

module.exports = connection;
