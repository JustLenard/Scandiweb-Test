import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import './Home.sass';
import Axios from 'axios';

const Home = props => {
	const [products, setProducts] = useState([]);

	// Get the information from the Data Base
	useEffect(() => {
		console.log('Home');
		Axios.get('https://scandiwebtest.herokuapp.com/api/get').then(response => {
			response.data.map(obj => {
				obj.checked = false;
			});
			setProducts(response.data);
		});
	}, []);

	const [deleteList, setDeleteList] = useState(products);

	// Handles the 'checked' logic on cards
	const handleCheck = (newValue, id) => {
		products.filter(product => product.idProduct === id)[0].checked = newValue;

		setProducts(products);
	};
	// Handles the mass Delete logic
	const massDelete = () => {
		const toDelete = products
			.filter(product => product.checked === true)
			.map(product => product.idProduct);
		Axios.delete(`https://scandiwebtest.herokuapp.com/api/delete`, {
			data: toDelete,
		});
		window.location.reload(true);
	};

	return (
		<div className="main-container">
			<NavBar
				navBarText={'Product List'}
				textInButton1={'Add'}
				textInButton2={'Mass Delete'}
				handleRouting="/addproduct"
				handleClick={massDelete}
			/>
			<div className={'card-container'}>
				{products.map(product => {
					return (
						<Card
							key={product.Sku}
							product={product}
							handleCheck={handleCheck}
						/>
					);
				})}
			</div>
			<Footer />
		</div>
	);
};

export default Home;
