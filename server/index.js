const express = require('express');
var connection = require('./database.js');
const app = express();

// const db = mysql.createPool({
// 	host: 'localhost',
// 	user: 'admin',
// 	password: 'password',
// 	database: 'ScandiwebDB',
// });

// const db = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'admin',
// 	password: 'password',
// 	database: 'ScandiwebDB',
// });

// app.get('/', (req, res) => {
// 	let sql = 'SELECT * FROM ScandiwebDB.new_table;';
// 	connection.query(sql, (err, results) => {
// 		if (err) throw err;
// 		res.send(results);
// 	});
// });s
app.get('/', (req, res) => {
	const sqlInsert =
		'INSERT INTO new_table (name_product, price_product) VALUES ("stick", 3)';
	// db.query(sqlInsert, [nameProduct, priceProduct], (err, result) => {});
	connection.query(sqlInsert, (err, results) => {
		if (err) throw err;
		res.send(results);
	});
});

app.listen(3001, () => {
	console.log('seems to be working!!');
	connection.connect(err => {
		if (err) throw err;
		console.log('Connected to DB');
	});
});

// db.connect(function (err) {
// 	if (err) throw err;
// 	console.log('Connected!');
// });
