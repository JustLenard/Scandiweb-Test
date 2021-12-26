import React from 'react';
import NavBar from './NavBar/NavBar';
import Card from './Card/Card';
import './App.sass';

const App = () => {
	return (
		<div class="main-container">
			<NavBar />
			<Card />
		</div>
	);
};

export default App;
