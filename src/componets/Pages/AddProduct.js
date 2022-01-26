import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import ProductInfo from '../ProductInfo/ProductInfo';
import Footer from '../Footer/Footer';
import './AddProduct.sass';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = props => {
	const [productInfoObject, setProductInfoObject] = useState({});
	let navigate = useNavigate();

	//Save product to Data Base
	const saveProduct = async e => {
		e.preventDefault();
		try {
			const send = await Axios.post(
				'https://scandiwebtest.herokuapp.com/api/insert',
				{
					productSku: productInfoObject.productSku,
					productName: productInfoObject.productName,
					productPrice: Number(productInfoObject.productPrice),
					productType: productInfoObject.currentType,
					productHeight: Number(productInfoObject.productHeight),
					productLength: Number(productInfoObject.productLength),
					productSize: Number(productInfoObject.productSize),
					productWeight: Number(productInfoObject.productWeight),
					productWidth: Number(productInfoObject.productWidth),
				}
			);
			// navigate('/');
			console.log(send);
			console.log(productInfoObject);
		} catch (e) {
			console.log(e);
		}
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
