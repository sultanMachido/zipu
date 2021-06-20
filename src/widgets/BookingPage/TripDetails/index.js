import React from 'react';
import TripDate from '../../../components/TripDate';
import './styles.scss';

function TripDetails(props) {
	const {travelTrips, returnTrips} = props;
	return (
		<div className="trip-details-container">
			<div className="header">
				<h5>Your Trip details</h5>
				<p>This rental includes Collision Damage Waiver with zero excess:</p>
			</div>
			<div className="date-pick">Pick date</div>
			<div className="trips">
				{travelTrips.length &&
					travelTrips.map((trip, index) => <TripDate key={index} tripDetails={trip} />)}
			</div>
			<div className="date-pick">Pick date</div>
			<div className="trips">
				{returnTrips.length &&
					returnTrips.map((trip, index) => <TripDate key={index} tripDetails={trip} />)}
			</div>
		</div>
	);
}

export default TripDetails;
