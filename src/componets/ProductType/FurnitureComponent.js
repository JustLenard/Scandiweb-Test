import React from 'react';

const FurnitureComponent = props => {
	return (
		<>
			<div>
				<label>Height (CM)</label>
				<input
					type="number"
					onChange={e => {
						props.setProductHeight(e.target.value);
					}}
				></input>
			</div>
			<div>
				<label>Width (CM)</label>
				<input
					type="number"
					onChange={e => {
						props.setProductWidth(e.target.value);
					}}
				></input>
			</div>
			<div>
				<label>Length (CM)</label>
				<input
					type="number"
					onChange={e => {
						props.setProductLength(e.target.value);
					}}
				></input>
			</div>
		</>
	);
};

export default FurnitureComponent;
