const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var connection = require('./database.js');
const app = express();
require('dotenv').config();
var port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {
	const sqlSelect = 'SELECT * FROM ScandiwebDB.Products;';
	connection.query(sqlSelect, (err, result) => {
		res.send(result);
	});
});

app.delete('/api/delete', (req, res) => {
	console.log(`here: ${req.data}`);
	// console.log(data);
	// console.log(toDelete.join());
	const sqlDelete = `DELETE FROM Products WHERE idProduct IN (${toDelete.join()})`;
	connection.query(sqlDelete, (err, result) => {
		// if (err) console.log(err);
	});
});

app.post('/api/insert', (req, res) => {
	const FrontEndObj = req.body;
	const sqlInsert =
		'INSERT INTO Products (Sku, Name, Price, Type, Size, Weight, Height, Length, Width) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
	connection.query(
		sqlInsert,
		[
			FrontEndObj.productSku,
			FrontEndObj.productName,
			FrontEndObj.productPrice,
			FrontEndObj.productType,
			FrontEndObj.productSize,
			FrontEndObj.productWeight,
			FrontEndObj.productHeight,
			FrontEndObj.productLength,
			FrontEndObj.productWidth,
		],
		(err, result) => {
			// console.log(err);
		}
	);
});

app.listen(3001, () => {
	connection.connect(err => {
		console.log(process.env.PORT);
		if (err) throw err;
		console.log(err);
	});
});
