/* eslint-disable no-unused-vars */
import './styles.scss';

import { Spin } from 'antd';
import HireCar from 'assets/img/hireCar.png';
import RentCar from 'assets/img/rentCar.png';
import TripCar from 'assets/img/tripCar.png';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchGroupedTrips } from 'redux/actions/trips/trips.actions';

import TranscoService from '../TranscoService';

const transcoServices = [
	{
		id: 1,
		title: 'Book a seat',
		content:
			'A valet is usually an employee of the establishment or an employee of a third party valet service. ',
		carImage: TripCar
	},
	{
		id: 2,
		title: 'Rent a car',
		content:
			'A valet is usually an employee of the establishment or an employee of a third party valet service. ',
		carImage: RentCar
	},
	{
		id: 3,
		title: 'Hire a car',
		content:
			'A valet is usually an employee of the establishment or an employee of a third party valet service. ',
		carImage: HireCar
	}
];

const BookTrip = ({ trips: { trips, fetchAllTripsLoading }, ...props }) => {
	return (
		<div className="bookTripWrapper mt-md mb-md">
			<div className="align-center justify-start bookTripHeader">
				<h1 className="h3-lg mr-xl">Book a trip or rent a car going to all parts </h1>
				<p className="p-lg">
					A valet is usually an employee of the establishment or an employee of a third party valet
					service. When there is a fee, it is usually either a flat amount or a fee based on how
					long the car is parked.
				</p>
			</div>

			<div className="vehicleCards">
				{transcoServices.map((transcoService) => {
					return (
						<Fragment key={transcoService.id}>
							<TranscoService transcoService={transcoService} />
						</Fragment>
					);
				})}

				{/* {fetchAllTripsLoading ? (
					<Fragment>
						<Spin size="large" />
					</Fragment>
				) : trips && trips.length > 0 ? (
					<Fragment>
						{trips.map((item, index) => {
							return <TranscoService key={index} transcoService={item} />;
						})}
					</Fragment>
				) : (
					<Fragment>
						<h2 className="sub-lg black">No Result Found</h2>
					</Fragment>
				)} */}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	trips: state.trips
});

const mapDispatchToProps = {
	searchGroupedTrips
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookTrip));
