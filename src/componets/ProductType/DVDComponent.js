import React from 'react';

const DVDComponent = props => {
	return (
		<div id="DVD">
			<div>
				<label>Size (MB):</label>
				<input
					required
					id="size"
					type="number"
					onChange={e => {
						props.setProductSize(e.target.value);
					}}
				></input>
			</div>
			<p className="description">Pleace provide the size in Mb of the DVD</p>
		</div>
	);
};

export default DVDComponent;
