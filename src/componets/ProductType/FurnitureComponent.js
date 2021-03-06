import React from 'react';

const FurnitureComponent = props => {
	return (
		<>
			<div>
				<label>Height (CM):</label>
				<input
					required
					id="height"
					type="number"
					onChange={e => {
						props.setProductHeight(e.target.value);
					}}
				></input>
			</div>
			<div>
				<label>Width (CM):</label>
				<input
					required
					id="width"
					type="number"
					onChange={e => {
						props.setProductWidth(e.target.value);
					}}
				></input>
			</div>
			<div>
				<label>Length (CM):</label>
				<input
					required
					id="length"
					type="number"
					onChange={e => {
						props.setProductLength(e.target.value);
					}}
				></input>
			</div>
			<p className="description">Pleace provide the size in Mb of the DVD</p>
		</>
	);
};

export default FurnitureComponent;
