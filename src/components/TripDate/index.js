import React from 'react';
import {PIcon} from '../SVGs';
import './styles.scss';

function TripDate({tripDetails}) {
	const {availability, timeLocation, pickupLocation, seatClass, availableSeats} = tripDetails;
	return (
		<div className="trip-date-container">
			<div className="pick-date">
				<ul>
					<li>
						<input type="checkbox" name="date" id="date" />
						<p>
							<label htmlFor="date"> {timeLocation}</label>
						</p>
					</li>
					<li>
						<PIcon />
						<small>{pickupLocation}</small>
					</li>
					<li>
						<PIcon />
						<small>{seatClass}</small>
					</li>
				</ul>
			</div>
			<div className="badge">
				{availability ? (
					<small className="available">{availableSeats} seat left, book now!</small>
				) : (
					<small className="not-available">Fully Booked</small>
				)}
			</div>
		</div>
	);
}

export default TripDate;
