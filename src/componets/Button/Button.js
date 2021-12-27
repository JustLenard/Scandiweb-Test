import React from 'react';
import './Button.sass';
const Button = props => {
	return <button className="btn">{props.textInButton}</button>;
};

export default Button;
