import React from 'react';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import AddProduct from './Pages/AddProduct';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/addproduct" exact element={<AddProduct />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
