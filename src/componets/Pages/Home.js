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
			response.data.map(inside => {
				inside.checked = false;
			});
			// console.log(response.data);
			setDbProducts(response.data);
		});
	}, []);
	// console.log(dbProducts);
	const [deleteList, setDeleteList] = useState(dbProducts);

	// console.log(dbProducts);
	const handleCheck = (newValue, id) => {
		// console.log(newValue, id);
		dbProducts[id].checked = newValue;
		// console.log(dbProducts);

		setDbProducts(dbProducts);
	};

	const massDelete = () => {
		const toDelete = dbProducts
			.filter(product => product.checked === true)
			.map(product => product.idProduct);
		console.log(toDelete);
		// console.log(toDelete.map(product => product.idProduct));
		Axios.delete(`http://localhost:3001/api/delete/${toDelete}`);
	};

	return (
		<div className="main-container">
			<NavBar
				NavBarText={'Product List'}
				textInButton1={'Add'}
				textInButton2={'Mass Delete'}
				addProductLink="/addproduct"
				handleClick={massDelete}
			/>
			<div className={'card-container'}>
				{dbProducts.map(dbProduct => {
					// console.log(dbProducts);
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
							Checked={dbProduct['Checked']}
							key={dbProduct['Sku']}
							idProduct={dbProduct['idProduct'] - 1}
							dbProducts={dbProducts}
							setDeleteList={setDeleteList}
							deleteList={deleteList}
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
