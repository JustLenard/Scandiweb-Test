import React from 'react';
import NavBar from '../NavBar/NavBar';
import ProdufctInfo from '../ProductInfo/ProdufctInfo';

const AddProduct = props => {
	return (
		<div>
			<NavBar
				NavBarText={'Add Product'}
				textInButton1={'Cancel'}
				textInButton2={'Save'}
				addProductLink="/"
			/>
			<ProdufctInfo />
		</div>
	);
};

export default AddProduct;
