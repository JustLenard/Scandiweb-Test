import React from 'react';
import './Button.sass';

const Button = props => {
	// console.log(props.handleSubmit, props.handleClick);
	return (
		<button
			form={props.form}
			type="submit"
			id="delete-product-btn"
			className="btn"
			// onSubmit={console.log('submit')}
			onClick={props.handleClick}
		>
			{props.textInButton}
		</button>
	);
};

export default Button;
