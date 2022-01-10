import React, { useState, useEffect } from 'react';
import './ProductInfo.sass';
import ProductType from '../ProductType/ProductType';
import FurnitureComponent from '../ProductType/FurnitureComponent';

const ProductInfo = props => {
	const [productSku, setProductSku] = useState('');
	const [productName, setProductName] = useState('');
	const [productPrice, setProductPrice] = useState(0);
	const [currentType, setCurrentType] = useState('');
	const [productWeight, setProductWeight] = useState(0);
	const [productSize, setProductSize] = useState(0);
	const [productHeight, setProductHeight] = useState(0);
	const [productLength, setProductLength] = useState(0);
	const [productWidth, setProductWidth] = useState(0);

	const productInfoObject = {
		productSku: productSku,
		productName: productName,
		productPrice: productPrice,
		currentType: currentType,
		productWeight: productWeight,
		productSize: productSize,
		productHeight: productHeight,
		productLength: productLength,
		productWidth: productWidth,
	};

	useEffect(() => {
		props.setProductInfoObject(productInfoObject);
	}, [JSON.stringify(productInfoObject)]);

	const changeType = e => {
		setCurrentType(e.target.value);
	};

	return (
		<div>
			<form id="product_form">
				<div id="sku">
					<label>Sku</label>
					<input
						required
						type="text"
						onChange={e => {
							setProductSku(e.target.value);
						}}
					></input>
				</div>

				<div id="name">
					<label>Name</label>
					<input
						type="text"
						onChange={e => {
							setProductName(e.target.value);
						}}
					></input>
				</div>
				<div id="price">
					<label>Price</label>
					<input
						type="number"
						onChange={e => {
							setProductPrice(e.target.value);
						}}
					></input>
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
				<ProductType
					currentType={currentType}
					setProductWeight={setProductWeight}
					setProductSize={setProductSize}
					setProductHeight={setProductHeight}
					setProductLength={setProductLength}
					setProductWidth={setProductWidth}
				/>
			</form>
		</div>
	);
};
export default ProductInfo;
