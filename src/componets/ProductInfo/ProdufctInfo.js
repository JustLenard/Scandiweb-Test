import React, { useState } from 'react';
import './ProductInfo.sass';
import ProductType from '../ProductType/ProductType';
import FurnitureComponent from '../ProductType/FurnitureComponent';

const ProdufctInfo = props => {
	// const productTypes = {
	// 	Furniture: FurnitureComponent,
	// };

	const [currentType, setCurrentType] = useState('');

	const changeType = e => {
		setCurrentType(e.target.value);
		console.log(currentType);
	};
	// const toRender = productTypes[currentType]();
	return (
		<div>
			<form className="product-info" id="product_form">
				<div className="product-sku">
					<label>Sku</label>
					<input type="text"></input>
				</div>

				<div className="product-name">
					<label>Name</label>
					<input type="text"></input>
				</div>
				<div className="product-price">
					<label>Price</label>
					<input type="text"></input>
				</div>
				<div className="type-switcher">
					<label>Type switcher</label>
					<select
						name="productType"
						id="productType"
						defaultValue={'none'}
						onChange={changeType}
					>
						<option value="none" disabled hidden>
							Select a Type
						</option>
						<option value="DVD">DVD</option>
						<option value="Furniture">Furniture</option>
						<option value="Book">Book</option>
					</select>
				</div>
				<ProductType currentType={currentType} />
			</form>
		</div>
	);
};

export default ProdufctInfo;
