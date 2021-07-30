import './styles.scss';

import React from 'react';
import Checks from 'ui/components/Checks';
import Company from 'ui/components/Company';
import VehicleSpecs from 'ui/components/VehicleSpecs';
import { HeartIcon } from 'ui/svgs';

function VehicleHireCard({
	imgUrl,
	carName,
	classType,
	vehicleInfo,
	fee,
	cancelType,
	availability,
	companyInfo,
	tripInfo
}) {
	return (
		<div className="vehicle-wrapper">
			<div className="top-card">
				<div className="image-wrapper">
					<img src={imgUrl} alt="car" />
				</div>
				<div className="car-type">
					<h2>{carName}</h2>
					<p>{classType}</p>
					<VehicleSpecs vehicleInfo={vehicleInfo} />
				</div>
				<div className="price">
					<small>price: </small>
					<h2>{fee}</h2>
					<p>{cancelType}</p>
					{availability ? (
						<small className="available">available</small>
					) : (
						<small className="not-available">Not available</small>
					)}
				</div>
			</div>
			<div className="bottom-card">
				<Company companyInfo={companyInfo} />
				<Checks tripInfo={tripInfo} />
				<div className="button-container">
					<button className="book-trip">choose car</button>
					<button className="save">
						<HeartIcon /> save
					</button>
				</div>
			</div>
			<div className="mobile-card">
				<Company companyInfo={companyInfo} className="first-mobile-column" />
				<div className="price">
					<small>price: </small>
					<h2>{fee}</h2>
					<p>{cancelType}</p>
					{availability ? (
						<small className="available">available</small>
					) : (
						<small className="not-available">Not available</small>
					)}
				</div>
			</div>
		</div>
	);
}

export default VehicleHireCard;
