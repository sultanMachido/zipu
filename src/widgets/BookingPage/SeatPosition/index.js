import React from 'react';
import SeatsArrangements from '../../../components/SeatsArrangements';
import './styles.scss';

function SeatPosition(props) {
	const {seats, onChange} = props;
	return (
		<div className="seat-position-container">
			<div className="header">
				<h5>Select your seating position</h5>
				<p>Please select the seating positions for your 2 seats</p>
			</div>
			<div className="seats">
				<SeatsArrangements seats={seats} onChange={onChange} />
			</div>
		</div>
	);
}

export default SeatPosition;
