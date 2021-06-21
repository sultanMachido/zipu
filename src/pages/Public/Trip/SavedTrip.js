import React from 'react';

import PublicContainer from 'layouts/PublicContainer';
import TripSearchItem from 'components/TripSearchItem';

import './index.scss';

const SavedTrip = () => {
	return (
		<PublicContainer>
			<section className="stWrapper">
				<div className="tscol justify-start align-center center mb-sm">
					<h3 className="sub-lg black">Saved Trip</h3>
					<p className="p-lg black">
						View all of your bookings, make changes and get help if you need it.
					</p>
				</div>
				<div className="tscol stItems">
					<TripSearchItem />
					<TripSearchItem />
				</div>
			</section>
		</PublicContainer>
	);
};

export default SavedTrip;
