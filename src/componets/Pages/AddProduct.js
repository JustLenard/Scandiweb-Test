import React from 'react';
import NavBar from '../NavBar/NavBar';
import ProdufctInfo from '../ProductInfo/ProdufctInfo';
import Footer from '../Footer/Footer';
import './AddProduct.sass';

const AddProduct = props => {
	return (
		<div className="main-container">
			<NavBar
				NavBarText={'Add Product'}
				textInButton1={'Cancel'}
				textInButton2={'Save'}
				addProductLink="/"
			/>
			<ProdufctInfo />
			<Footer />
		</div>
	);
};

export default AddProduct;
