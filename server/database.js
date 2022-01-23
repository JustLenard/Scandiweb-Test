var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'sql11.freemysqlhosting.net',
	user: 'sql11465741',
	password: 'X2GmyJ7YPD',
	database: 'sql11465741',
});

//Database expired
// Need to find something that will keep on running

module.exports = connection;
