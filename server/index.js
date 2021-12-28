const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'ScandiwebDB',
});

app.get('/', (req, res) => {
	res.send('Hello World!');
	const sqlInsert =
		'INSERT INTO product (name-roduct, price-product) VALUES (?,?)';
	db.query(sqlInsert, [nameProduct, priceProduct], (err, result) => {});
});

app.listen(3001, () => {
	console.log('seems to be working');
});
