import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import ProductInfo from '../ProductInfo/ProductInfo';
import Footer from '../Footer/Footer';
import './AddProduct.sass';
import Axios from 'axios';

const AddProduct = props => {
	const [productInfoObject, setProductInfoObject] = useState({});

	//Save product to Data Base
	const saveProduct = e => {
		console.log(window.location);
		Axios.post('http://localhost:3001/api/insert', {
			productSku: productInfoObject.productSku,
			productName: productInfoObject.productName,
			productPrice: productInfoObject.productPrice,
			productType: productInfoObject.currentType,
			productHeight: Number(productInfoObject.productHeight),
			productLength: Number(productInfoObject.productLength),
			productSize: Number(productInfoObject.productSize),
			productWeight: Number(productInfoObject.productWeight),
			productWidth: Number(productInfoObject.productWidth),
		});
		window.location = 'http://localhost:3000/';
	};

	return (
		<div className="main-container">
			<NavBar
				navBarText={'Add Product'}
				textInButton1={'Cancel'}
				textInButton2={'Save'}
				handleRouting="/"
				form={'product_form'}
			/>
			<ProductInfo
				setProductInfoObject={setProductInfoObject}
				handleSubmit={saveProduct}
			/>
			<Footer />
		</div>
	);
};

export default AddProduct;
