import React from 'react';

const BookComponent = props => {
	return (
		<div id="Book">
			<div>
				<label>Weight (Kg):</label>
				<input
					required
					id="weight"
					type="number"
					onChange={e => {
						props.setProductWeight(e.target.value);
					}}
				></input>
			</div>
			<p className="description">Pleace provide the weight of the Book in Kg</p>
		</div>
	);
};

export default BookComponent;
