import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import './Home.sass';
import Axios from 'axios';

const Home = props => {
	const [products, setProducts] = useState([]);

	// Gets the Products from the data base
	useEffect(() => {
		Axios.get('https://scandiwebtest.herokuapp.com/api/get').then(response => {
			response.data.rows.map(obj => {
				obj.checked = false;
			});
			console.log(response.data.rows);
			setProducts(response.data.rows);
		});
	}, []);

	// Handles the 'checked' logic on cards
	const handleCheck = (newValue, id) => {
		products.filter(product => product.idproduct === id)[0].checked = newValue;

		setProducts(products);
	};

	// Handles the mass Delete logic
	const massDelete = async () => {
		const toDelete = products
			.filter(product => product.checked === true)
			.map(product => product.idproduct);

		try {
			const del = await Axios.delete(
				`https://scandiwebtest.herokuapp.com/api/delete`,
				{
					data: toDelete,
				}
			);
			window.location.reload(true);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className="main-container">
			<NavBar
				navBarText={'Product List'}
				textInButton1={'ADD'}
				textInButton2={'MASS DELETE'}
				handleRouting="/addproduct"
				handleClick={massDelete}
			/>
			<div className={'card-container'}>
				{products.map(product => {
					return (
						<Card
							key={product.sku}
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
