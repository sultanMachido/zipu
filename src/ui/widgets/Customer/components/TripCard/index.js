import './styles.scss';

import React from 'react';
import { HeartIcon, ShareIcon } from 'ui/svgs/index';

import Checks from './Checks';
import Company from './Company';
import Trip from './Trip';
import VehicleSpecs from './VehicleSpecs';

function TripCard(props) {
	const { companyInfo, share, trips, vehicleInfo, tripInfo, priceInfo } = props?.tripInfo;
	return (
		<div className="tripcard-wrapper">
			<div className="top-card">
				<Company companyInfo={companyInfo} className="first-trip-column" />
				<div className="second-trip-column">
					<div className="share">
						<ShareIcon onClick={share} />
					</div>
					<Trip trips={trips} />
				</div>
			</div>
			<div className="bottom-card">
				<VehicleSpecs vehicleInfo={vehicleInfo} />
				<Checks tripInfo={tripInfo} />
				<div className="amount">
					<h2>{priceInfo?.amount?.toLocaleString()}</h2>
					<p>{priceInfo?.vehicleType}</p>
					<small>{priceInfo?.availableSeats}</small>
				</div>
				<div className="button-container">
					<button className="book-trip">book trip</button>
					<button className="save">
						<HeartIcon /> save
					</button>
				</div>
			</div>
			<div className="mobile-card">
				<Company companyInfo={companyInfo} className="first-mobile-column" />
				<div className="second-mobile-column">
					<div className="amount">
						<h2>{priceInfo?.amount?.toLocaleString()}</h2>
						<p>{priceInfo?.vehicleType}</p>
						<small>{priceInfo?.availableSeats}</small>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TripCard;
