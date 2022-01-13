import React from 'react';

const DVDComponent = props => {
	return (
		<div id="DVD">
			<label>Size (MB)</label>
			<input
				required
				id="size"
				type="number"
				onChange={e => {
					props.setProductSize(e.target.value);
				}}
			></input>
		</div>
	);
};

export default DVDComponent;
