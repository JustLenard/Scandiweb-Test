import React from 'react';
import PropTypes from 'prop-types';
import './ProductInfo.sass';
const ProdufctInfo = props => {
	return (
		<div>
			<form className="product-info">
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
			</form>
		</div>
	);
};

ProdufctInfo.propTypes = {};

export default ProdufctInfo;
