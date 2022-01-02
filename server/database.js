var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'admin',
	password: 'password',
	database: 'ScandiwebDB',
});

module.exports = connection;
