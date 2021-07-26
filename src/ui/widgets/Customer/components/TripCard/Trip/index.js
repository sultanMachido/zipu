import './styles.scss';

import React from 'react';
import { PIcon, RightArrow } from 'ui/svgs';

export default function Trip({ trips }) {
	return (
		<>
			{trips.length &&
				trips.map((trip) => (
					<div key={trip.id} className="trip-wrapper">
						<div className="trip-info">
							<h2>{trip.source?.time}</h2>
							<p>
								<PIcon /> <span>{trip.source?.address}</span>
							</p>
						</div>
						<div>
							<RightArrow className="right-arrow" />
						</div>
						<div className="trip-info">
							<h2>{trip.destination?.time}</h2>
							<p>
								<PIcon /> <span>{trip.destination?.address}</span>
							</p>
						</div>
						<small className="time">{trip.estimatedTime}</small>
					</div>
				))}
		</>
	);
}
