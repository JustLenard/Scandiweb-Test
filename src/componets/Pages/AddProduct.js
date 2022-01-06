import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import ProductInfo from '../ProductInfo/ProductInfo';
import Footer from '../Footer/Footer';
import './AddProduct.sass';

const AddProduct = props => {
	const saveProduct = () => {
		// const submitProduct = () => {
		// 	console.log('start the axios?');
		// };
		console.log('f');
	};

	const [data, setData] = useState({});

	const childToParent = () => {};

	const [productInfoObject, setProductInfoObject] = useState({});
	// console.log(productInfoObject);
	return (
		<div className="main-container">
			<NavBar
				NavBarText={'Add Product'}
				textInButton1={'Cancel'}
				textInButton2={'Save'}
				addProductLink="/"
				handleClick={saveProduct}
			/>
			<ProductInfo
				setProductInfoObject={setProductInfoObject}
				childToParent={childToParent}
			/>
			<Footer />
		</div>
	);
};

export default AddProduct;
