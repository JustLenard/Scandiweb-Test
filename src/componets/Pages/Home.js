import React from 'react';
import NavBar from '../NavBar/NavBar';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import './Home.sass';

const Home = props => {
	return (
		<div className="main-container">
			<NavBar
				NavBarText={'Product List'}
				textInButton1={'Add'}
				textInButton2={'Mass Delete'}
				addProductLink="/addproduct"
			/>
			<Card />
			<Footer />
		</div>
	);
};

export default Home;
