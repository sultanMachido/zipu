/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import { Slider } from 'antd';
import classnames from 'classnames/bind';
import { View } from 'ui/atoms/components/Typography';

import style from './index.module.scss';

let styles = classnames.bind(style);
import './index.scss';

import { Spin } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
// import TripSearchTab from '../components/TripSearchTab';
// import VehicleSearchTab from '../components/VehicleSearchtab';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchGroupedTrips } from 'redux/actions/trips/trips.actions';
import { dateFilterParser } from 'utils/dateFilter';

import TripCard from '../components/TripCard';
import TripFilter from './components/TripFilter';
import VehicleSearchItem from './components/VehicleSearchItem';
import EmptyState from './empty';
import { mockData_TripCard } from './MOCK_DATA';

const SearchTrips = ({ trips: { trips, fetchAllTripsLoading }, ...props }) => {
	const { startDate: _startDate, endDate: _endDate } = dateFilterParser('day');
	const [dateFilter, setDateFilter] = useState({
		origin: 'lagos',
		destination: 'enugu',
		round_trip: 0
	});

	useEffect(() => {
		props.searchGroupedTrips(dateFilter);
	}, []);

	useEffect(() => {
		console.log('trips: chsnged ', trips);
		trips && trips.length > 0 && console.log('first item', trips[0]);
		console.log('///////////////////////');
	}, [trips]);

	function onChange(value) {
		console.log('onChange: ', value);
	}

	function onAfterChange(value) {
		console.log('onAfterChange: ', value);
	}

	return (
		<Fragment>
			<View className={styles('hero')}>
				<View className={`${styles('hero__header')} ${styles('search-tab')}`}>
					<TripFilter />
				</View>
				<View className={styles('heroTab__content')}>
					<section className="searchContainer">
						<div className="searchFilter">
							<div className="tscol">
								<div className="tscol filterBlock">
									<h2>Price</h2>
									<Slider
										range
										step={10}
										defaultValue={[20, 50]}
										onChange={onChange}
										onAfterChange={onAfterChange}
									/>
								</div>
								<div className="tscol filterBlock">
									<h2>Vehicle Request</h2>
									<div className="d-flex filterBlock--check">
										<input type="checkbox" value="ac" />
										<label htmlFor="sc"> AC</label>
									</div>
									<div className="d-flex filterBlock--check">
										<input type="checkbox" value="ac" />
										<label htmlFor="sc">AC</label>
									</div>
								</div>
								<div className="tscol filterBlock">
									<h2>Passenger Number</h2>
									<div className="d-flex filterBlock--check">
										<input type="checkbox" value="ac" />
										<label htmlFor="sc"> 1 or 2 People</label>
									</div>
									<div className="d-flex filterBlock--check">
										<input type="checkbox" value="ac" />
										<label htmlFor="sc">5+ People</label>
									</div>
								</div>
							</div>
						</div>
						<div className="searchItems">
							<div className="tscol">
								<div className="searchItems__results">
									{/* <TripCard tripInfo={mockData_TripCard} /> */}
									<VehicleSearchItem />
									{/* {fetchAllTripsLoading ? (
										<Fragment>
											<Spin size="large" />
										</Fragment>
									) : trips && trips.length > 0 ? (
										<Fragment>
											{trips.map((item, index) => {
												return <VehicleSearchItem   key={index} trip={item} />
											})}
										</Fragment>
									) : (
										<Fragment>
											<EmptyState />
										</Fragment>
									)} */}
								</div>
							</div>
						</div>
					</section>
				</View>
			</View>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	trips: state.trips
});

const mapDispatchToProps = {
	searchGroupedTrips
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchTrips));
