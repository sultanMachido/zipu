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
				<h2 className="sub-lg black">Company Information</h2>
				<p className="body-2-lg grey-dark">{description}</p>
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
				<h4 className="body-2-lg black"> Contact Information</h4>
				<p>{contactInfo}</p>
			</div>
			<div className="park-address">
				<h4 className="body-2-lg black">Park Address</h4>
				<p>{parkAddress}</p>
			</div>
			<div className="emergency-number">
				<h4 className="body-2-lg black"> Emergency number</h4>
				<p>{emergencyNumber}</p>
			</div>
			<div className="special-packages">
				<h4 className="body-2-lg black">Ads and special packages?</h4>
				<p>{adsAndSpecialPackages}</p>
			</div>
		</div>
	);
}

export default CompanyInfo;
