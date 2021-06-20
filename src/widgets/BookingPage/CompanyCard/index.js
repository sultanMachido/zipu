import React from 'react';
import Company from '../../../components/Company';
import {LocationIcon} from '../../../components/SVGs';
import VehicleSpecs from '../../../components/VehicleSpecs';
import './styles.scss';

function CompanyCard(props) {
	const {companyHeader, tripDetails, vehicleInfo} = props;
	return (
		<div className="booking-company-card">
			<div className="left">
				<div className="image-container">
					<img src={tripDetails.carImage} alt="" />
				</div>
				<Company companyInfo={companyHeader} className="company-details" />
			</div>
			<div className="right">
				<div className="top-part-card">
					<div className="top">
						<div className="each">
							<h1>GIGM Jet Plus</h1>
							<p>4 hours journey</p>
						</div>
						<div className="badge">
							<small>10 seats available</small>
						</div>
					</div>
					<div className="bottom">
						<div>
							<small>
								<LocationIcon />
								<span>Pick-up terminal</span>
							</small>
							<h3>Ekpoma park</h3>
						</div>
						<div>
							<small>
								<LocationIcon />
								<span>Pick-up terminal</span>
							</small>
							<h3>Ekpoma park</h3>
						</div>
					</div>
				</div>
				<VehicleSpecs vehicleInfo={vehicleInfo} className="vehicleInfo" />
			</div>
		</div>
	);
}

export default CompanyCard;
