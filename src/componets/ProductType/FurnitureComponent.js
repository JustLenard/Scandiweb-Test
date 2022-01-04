import React from 'react';

const FurnitureComponent = props => {
	return (
		<>
			<div>
				<label>Height (CM)</label>
				<input type="number"></input>
			</div>
			<div>
				<label>Width (CM)</label>
				<input type="number"></input>
			</div>
			<div>
				<label>Length (CM)</label>
				<input type="number"></input>
			</div>
		</>
	);
};

export default FurnitureComponent;
