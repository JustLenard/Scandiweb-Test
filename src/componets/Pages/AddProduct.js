import React from 'react';
import NavBar from '../NavBar/NavBar';

const AddProduct = props => {
	return (
		<div>
			<NavBar
				NavBarText={'Add Product'}
				textInButton1={'Cancel'}
				textInButton2={'Save'}
				addProductLink="/"
			/>
		</div>
	);
};

export default AddProduct;
