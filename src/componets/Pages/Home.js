import React, { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import './Home.sass';
import Axios from 'axios';

const Home = props => {
	useEffect(() => {
		Axios.get('http://localhost:3001/api/get').then(response => {
			console.log(response);
		});
	}, []);

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
