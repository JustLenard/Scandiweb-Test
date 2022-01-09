import React from 'react';
import './Card.sass';

const Card = props => {
	const typeDiferences = {
		Book: <div>Weight: {props.Size} KG</div>,
		DVD: <div>Size: {props.Size} MB</div>,
		Furniture: (
			<div>
				Dimension: {props.Width}x{props.Length}x{props.Height}
			</div>
		),
	};

	// const selectDelete = e => {
	// 	if (e.target.checked === true) {
	// 		const newAr = props.dbProducts.filter(
	// 			product =>
	// 				// product.Sku;
	// 				product.Sku !== props.Sku
	// 			// console.log(product.Sku)
	// 		);
	// 		// console.log(props.dbProducts);
	// 		console.log(newAr);
	// 	}
	// };

	return (
		<div className={'card'}>
			<input type={'checkBox'} onClick={}></input>
			<div>Sku: {props.Sku}</div>
			<div>Name: {props.Name}</div>
			<div>Price: {props.Price} $</div>
			{typeDiferences[`${props.Type}`]}
		</div>
	);
};

export default Card;
