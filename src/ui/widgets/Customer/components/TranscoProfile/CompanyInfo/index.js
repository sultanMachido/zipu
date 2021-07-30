import './styles.scss';

import React from 'react';
import { AirConditionIcon, DoorIcon, LuggageIcon, SeatIcon } from 'ui/svgs';

function CompanyInfo(props) {
	const {
		description,
		imgUrl,
		carInfo,
		contactInfo,
		parkAddress,
		emergencyNumber,
		adsAndSpecialPackages
	} = props;
	return (
		<div className="info-wrapper">
			<div className="image-wrapper">
				<img src={imgUrl} alt="company" />
			</div>
			<div className="company-info">
				<h2>Company Information</h2>
				<p>{description}</p>
			</div>
			<div className="car-info">
				<ul>
					<li>
						<SeatIcon /> <small>{carInfo.seater}</small>
					</li>
					<li>
						<LuggageIcon /> <small>{carInfo.luggage}</small>
					</li>
					<li>
						<AirConditionIcon />
						<small>{carInfo.air}</small>
					</li>
					<li>
						<DoorIcon />
						<small>{carInfo.door}</small>
					</li>
				</ul>
			</div>
			<div className="contact-info">
				<h4>Contact Information</h4>
				<p>{contactInfo}</p>
			</div>
			<div className="park-address">
				<h4>Park Address</h4>
				<p>{parkAddress}</p>
			</div>
			<div className="emergency-number">
				<h4>Emergency number</h4>
				<p>{emergencyNumber}</p>
			</div>
			<div className="special-packages">
				<h4>Ads and special packages?</h4>
				<p>{adsAndSpecialPackages}</p>
			</div>
		</div>
	);
}

export default CompanyInfo;
