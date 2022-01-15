var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'sql11.freemysqlhosting.net',
	user: 'sql11465741',
	password: 'X2GmyJ7YPD',
	database: 'sql11465741',
});

//server(adress): sql11.freemysqlhosting.net
//sql11.freemysqlhosting.net:3306/

module.exports = connection;
