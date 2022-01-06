import React from 'react';
import './Button.sass';

const Button = props => {
	return (
		<button className="btn" onClick={props.handleClick}>
			{props.textInButton}
		</button>
	);
};

export default Button;
