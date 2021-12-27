import React from 'react';
import NavBar from '../NavBar/NavBar';
import Card from '../Card/Card';
import './Home.sass';

const Home = props => {
	return (
		<div>
			<NavBar
				NavBarText={'Product List'}
				textInButton1={'Add'}
				textInButton2={'Mass Delete'}
				addProductLink="/addproduct"
			/>
			<Card />
		</div>
	);
};

export default Home;
