import React from 'react';
import FurnitureComponent from './FurnitureComponent';
import DVDComponent from './DVDComponent';
import BookComponent from './BookComponent';
import DefaultComponet from './DefaultComponet';

const ProductType = props => {
	const productTypes = {
		Furniture: FurnitureComponent,
		DVD: DVDComponent,
		Book: BookComponent,
		'': DefaultComponet,
	};
	return productTypes[props.currentType]();
};

export default ProductType;
