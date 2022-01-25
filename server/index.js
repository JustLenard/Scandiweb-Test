// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// // const connection = require('./database.js');
// const app = express();
// const port = process.env.PORT || 3002;

// const { Client } = require('pg');

// const connection = new Client({
// 	connectionString: process.env.DATABASE_URL,
// 	ssl: {
// 		rejectUnauthorized: false,
// 	},
// });

// // client.connect();

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/api/get', (req, res) => {
// 	const sqlSelect = `SELECT * FROM sql11465741.products;`;
// 	connection.query(sqlSelect, (err, result) => {
// 		res.send(result);
// 	});
// });

// app.delete('/api/delete', (req, res) => {
// 	const toDelete = req.body;
// 	res.send('OK');
// 	const sqlDelete = `DELETE FROM products WHERE idProduct IN (${toDelete.join()})`;
// 	connection.query(sqlDelete, (err, result) => {
// 		if (err) console.log(err);
// 	});
// });

// app.post('/api/insert', (req, res) => {
// 	const FrontEndObj = req.body;
// 	res.send('OK');
// 	const sqlInsert =
// 		'INSERT INTO products (sku, name, price, type, size, weight, height, length, width) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
// 	connection.query(
// 		sqlInsert,
// 		[
// 			FrontEndObj.productSku,
// 			FrontEndObj.productName,
// 			FrontEndObj.productPrice,
// 			FrontEndObj.productType,
// 			FrontEndObj.productSize,
// 			FrontEndObj.productWeight,
// 			FrontEndObj.productHeight,
// 			FrontEndObj.productLength,
// 			FrontEndObj.productWidth,
// 		],
// 		(err, result) => {
// 			console.log(err);
// 		}
// 	);
// });

// app.listen(port, () => {
// 	connection.connect(err => {
// 		console.log(process.env.DATABASE_URL);
// 		console.log(`listening to port ${port}`);
// 	});
// });

const { Client } = require('pg');

const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
});

client.connect();

client.query(
	'SELECT table_schema,table_name FROM information_schema.tables;',
	(err, res) => {
		if (err) throw err;
		for (let row of res.rows) {
			console.log(JSON.stringify(row));
		}
		client.end();
	}
);
