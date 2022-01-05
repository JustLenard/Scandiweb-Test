import React from 'react';

const BookComponent = props => {
	return (
		<div id="Book">
			<label>Weight (Kg)</label>
			<input
				type="number"
				onChange={e => {
					props.setProductWeight(e.target.value);
				}}
			></input>
		</div>
	);
};

export default BookComponent;
