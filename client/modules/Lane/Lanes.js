import React, { PropTypes } from 'react';
import Lane from './LaneContainer';

const Lanes = ({ lanes }) => {
	return (
		<div>{lanes.map(lane => 
			<Lane key={lane.id} lane={lane} />
		)}</div>
	);
};

Lanes.propTypes = {
	lanes: PropTypes.array,
};

export default Lanes;