import React from 'react';
import './NavBar.sass';

const NavBar = () => {
	return (
		<div id="navbar">
			<h1 id="navbar-text">Productsl list</h1>
			<div class="navbar-buttons">
				<button id="add-product-btn">add</button>
				<button id="delete-product-btn">delete</button>
			</div>
		</div>
	);
};

export default NavBar;
