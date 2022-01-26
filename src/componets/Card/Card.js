import React from 'react';
import './Card.sass';

const Card = props => {
	const typeDiferences = {
		Book: <div>Weight: {props.product.weight} KG</div>,
		DVD: <div>Size: {props.product.size} MB</div>,
		Furniture: (
			<div>
				Dimension: {props.product.height}x{props.product.width}x
				{props.product.length}
			</div>
		),
	};

	return (
		<div className={'card'}>
			<input
				className={'delete-checkbox'}
				type={'checkBox'}
				onClick={e => {
					props.handleCheck(e.target.checked, props.product.idproduct);
				}}
			></input>
			<div>Sku: {props.product.sku}</div>
			<div>Name: {props.product.name}</div>
			<div>Price: {props.product.price} $</div>
			{typeDiferences[`${props.product.type}`]}
		</div>
	);
};

export default Card;
