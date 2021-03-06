import React from 'react';
import './NavBar.sass';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const NavBar = props => {
	return (
		<div id="navbar">
			<h1 id="navbar-text">{props.navBarText}</h1>
			<div className="navbar-buttons">
				<Link to={props.handleRouting}>
					<Button textInButton={props.textInButton1} />
				</Link>
				<Button
					textInButton={props.textInButton2}
					id="delete-product-btn"
					handleClick={props.handleClick}
					handleSubmit={props.handleSubmit}
					form={props.form}
				/>
			</div>
		</div>
	);
};

export default NavBar;
