import React from 'react';
import './Card.sass';

const Card = props => {
	console.log(props.Size);
	const typeDiferences = {
		Book: <div>Weight: {props.Size} KG</div>,
		DVD: <div>Size: {props.Size} MB</div>,
		Furniture: (
			<div>
				Dimension: {props.Width}x{props.Length}x{props.Height}
			</div>
		),
	};

	return (
		<div className={'card'}>
			<input type={'checkBox'}></input>
			<div>Sku: {props.Sku}</div>
			<div>Name: {props.Name}</div>
			<div>Price: {props.Price} $</div>
			{typeDiferences[`${props.Type}`]}
		</div>
	);
};

export default Card;
