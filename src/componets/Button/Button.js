import React from 'react';
import './Button.sass';

const Button = props => {
	return (
		<button id="delete-product-btn" className="btn" onClick={props.handleClick}>
			{props.textInButton}
		</button>
	);
};

export default Button;
