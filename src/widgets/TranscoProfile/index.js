import React from 'react';
import TripCard from '../../components/TripCard';
import VehicleHireCard from '../../components/VehicleHireCard';
import CompanyInfo from './CompanyInfo';
import TranscoHeader from './TranscoHeader';
import './styles.scss';

function TransoProfile({companyDescription, companyHeader, tripDetails, hireDetails}) {
	return (
		<div className="transcopage-wrapper">
			<TranscoHeader {...companyHeader} />
			<div className="row">
				<CompanyInfo {...companyDescription} />
				<div className="car-infos">
					<div className="trips">
						<h2 className="title">Trips by God is good motors</h2>
						{tripDetails.length && tripDetails.map(trip => <TripCard {...trip} />)}
					</div>
					<div className="vehicle-hire">
						<h2 className="title">Vehicles for hire</h2>
						{hireDetails.length &&
							hireDetails.map(hireDetail => <VehicleHireCard {...hireDetail} />)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default TransoProfile;
