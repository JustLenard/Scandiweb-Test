import React, { useState } from 'react';
import FurnitureComponent from './FurnitureComponent';
import DVDComponent from './DVDComponent';
import BookComponent from './BookComponent';
import DefaultComponet from './DefaultComponet';

const ProductType = props => {
	const productTypes = {
		Furniture: (
			<FurnitureComponent
				setProductWidth={props.setProductWidth}
				setProductLength={props.setProductLength}
				setProductHeight={props.setProductHeight}
			/>
		),
		DVD: <DVDComponent setProductSize={props.setProductSize} />,
		Book: <BookComponent setProductWeight={props.setProductWeight} />,
		'': <DefaultComponet />,
	};

	return productTypes[props.currentType];
};

export default ProductType;
