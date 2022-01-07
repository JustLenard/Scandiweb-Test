const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
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

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {
	const sqlSelect = 'SELECT * FROM ScandiwebDB.Products;';
	connection.query(sqlSelect, (err, result) => {
		res.send(result);
	});
});

app.post('/api/insert', (req, res) => {
	const productSku = req.body.productSku;
	const productName = req.body.productName;
	const productPrice = req.body.productPrice;
	const productType = req.body.productType;

	const sqlInsert =
		'INSERT INTO Products (Sku, Name, Price, Type) VALUES (?, ?, ?, ?)';
	connection.query(
		sqlInsert,
		[productSku, productName, productPrice, productType],
		(err, result) => {
			console.log(err);
		}
	);
});

// app.get('/', (req, res) => {
// 	const sqlInsert =
// 		'INSERT INTO new_table (name_product, price_product) VALUES ("stick", 3)';
// 	// db.query(sqlInsert, [nameProduct, priceProduct], (err, result) => {});
// 	connection.query(sqlInsert, (err, results) => {
// 		if (err) throw err;
// 		res.send(results);
// 	});
// });

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
