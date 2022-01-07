import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import ProductInfo from '../ProductInfo/ProductInfo';
import Footer from '../Footer/Footer';
import './AddProduct.sass';
import Axios from 'axios';

const AddProduct = props => {
	const [productInfoObject, setProductInfoObject] = useState({});
	const saveProduct = () => {
		console.log('Yea, I am in parent', productInfoObject);
		Axios.post('http://localhost:3001/api/insert', {
			productSku: productInfoObject['productSku'],
			productName: productInfoObject['productName'],
			productPrice: productInfoObject['productPrice'],
			productType: productInfoObject['currentType'],
		}).then(() => {
			alert('success');
		});
	};
	// console.log(productInfoObject['productSku']);

	// const submitToDb = ()=>{

	// }

	return (
		<div className="main-container">
			<NavBar
				NavBarText={'Add Product'}
				textInButton1={'Cancel'}
				textInButton2={'Save'}
				addProductLink="/"
				handleClick={saveProduct}
			/>
			<ProductInfo setProductInfoObject={setProductInfoObject} />
			<Footer />
		</div>
	);
};

export default AddProduct;
