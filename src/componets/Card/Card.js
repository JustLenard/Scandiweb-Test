import React from 'react';
import './Card.sass';

const Card = props => {
	const typeDiferences = {
		Book: <div>Weight: {props.product.Size} KG</div>,
		DVD: <div>Size: {props.product.Size} MB</div>,
		Furniture: (
			<div>
				Dimension: {props.product.Height}x{props.product.Width}x
				{props.product.Length}
			</div>
		),
	};

	return (
		<div className={'card'}>
			<input
				className={'delete-checkbox'}
				type={'checkBox'}
				onClick={e => {
					props.handleCheck(e.target.checked, props.product.idProduct);
				}}
			></input>
			<div>Sku: {props.product.Sku}</div>
			<div>Name: {props.product.Name}</div>
			<div>Price: {props.product.Price} $</div>
			{typeDiferences[`${props.product.Type}`]}
		</div>
	);
};

export default Card;
