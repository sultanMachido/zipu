import React from 'react';
import ChargesSummary from './ChargesSummary';
import {mockData_ChargesSummary} from './ChargesSummary/MOCK_DATA';
import {mockData_CompanyCard} from './CompanyCard/MOCK_DATA';
import {mockData_SeatPosition} from './SeatPosition/MOCK_DATA';
import {mockData_TripDetails} from './TripDetails/MOCK_DATA';
import CompanyCard from './CompanyCard';
import PersonalDetails from './PersonalDetailsForm';
import SeatPosition from './SeatPosition';
import TripDetails from './TripDetails';
import './styles.scss';
function BookingPage() {
	return (
		<div className="booking-page-container">
			<div className="first-column">
				<CompanyCard {...mockData_CompanyCard} />
				<TripDetails {...mockData_TripDetails} />
				<PersonalDetails />
				<SeatPosition {...mockData_SeatPosition} />
			</div>
			<div className="second-column">
				<ChargesSummary {...mockData_ChargesSummary} />
			</div>
		</div>
	);
}

export default BookingPage;
