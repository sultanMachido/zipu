/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './styles.scss';

import React, { useEffect } from 'react';

import TripCard from '../TripCard';
import VehicleHireCard from '../VehicleHireCard';
import CompanyInfo from './CompanyInfo';
import TranscoHeader from './TranscoHeader';

function TransoProfile({ companyDescription, companyHeader, tripDetails, hireDetails }) {
	useEffect(() => {
		console.log('tripdetails', tripDetails);
	}, []);
	return (
		<div className="transcopage-wrapper">
			<TranscoHeader {...companyHeader} />
			<div className="row">
				<CompanyInfo {...companyDescription} />
				<div className="car-infos">
					<div className="trips">
						<h2 className="title">Trips by God is good motors</h2>
						{/* {tripDetails.length > 0 &&
							tripDetails.map((trip, index) => <TripCard key={index} {...trip} />)} */}
					</div>
					<div className="vehicle-hire">
						<h2 className="title">Vehicles for hire</h2>
						{hireDetails.length &&
							hireDetails.map((hireDetail, index) => (
								<VehicleHireCard key={index} {...hireDetail} />
							))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default TransoProfile;
