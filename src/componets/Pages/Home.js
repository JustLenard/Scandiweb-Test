import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import './Home.sass';
import Axios from 'axios';

const Home = props => {
	const [dbProducts, setDbProducts] = useState([]);
	useEffect(() => {
		Axios.get('http://localhost:3001/api/get').then(response => {
			setDbProducts(response.data);
		});
	}, []);

	console.log(dbProducts);
	console.log(dbProducts['Name']);
	console.log(
		dbProducts.map(product => {
			console.log(product['Name']);
		})
	);

	return (
		<div className="main-container">
			<NavBar
				NavBarText={'Product List'}
				textInButton1={'Add'}
				textInButton2={'Mass Delete'}
				addProductLink="/addproduct"
			/>
			<div className={'card-container'}>
				{dbProducts.map(dbProduct => {
					return (
						<Card
							Price={dbProduct['Price']}
							Height={dbProduct['Height']}
							Length={dbProduct['Length']}
							Name={dbProduct['Name']}
							Size={dbProduct['Size']}
							Sku={dbProduct['Sku']}
							Type={dbProduct['Type']}
							Weight={dbProduct['Weight']}
							Width={dbProduct['Width']}
						/>
					);
				})}
			</div>
			<Footer />
		</div>
	);
};

export default Home;
