// /* eslint-disable no-unused-vars */
// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react/jsx-key */
// /* eslint-disable no-undef */
import { Slider } from 'antd';
import classnames from 'classnames/bind';
import { View } from 'ui/atoms/components/Typography';
import { useQuery } from 'utils/URLSearchParam';

import style from './index.module.scss';

let styles = classnames.bind(style);
import './index.scss';

import { Spin } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchGroupedTrips } from 'redux/actions/trips/trips.actions';

// import TripCard from '../components/TripCard';
import TripFilter from './components/TripFilter';
import VehicleSearchItem from './components/VehicleSearchItem';
import EmptyState from './empty';
// import { mockData_TripCard } from './MOCK_DATA';

const SearchTrips = ({ trips: { trips, fetchAllTripsLoading }, ...props }) => {
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
										range={false}
										min={1000}
										max={50000}
										step={1000}
										defaultValue={[1000, 5000]}
										onChange={onChange}
										onAfterChange={onAfterChange}
									/>
								</div>
								<div className="tscol filterBlock">
									<h2>Time</h2>
									<div className="d-flex filterBlock--check">
										<input type="checkbox" name="time" value="ac" />
										<label htmlFor="sc">Morning</label>
									</div>
									<div className="d-flex filterBlock--check">
										<input type="checkbox" name="time" value="ac" />
										<label htmlFor="sc">Afternoon</label>
									</div>
									<div className="d-flex filterBlock--check">
										<input type="checkbox" name="time" value="ac" />
										<label htmlFor="sc">Evening</label>
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
									{/* <VehicleSearchItem /> */}
									{fetchAllTripsLoading ? (
										<Fragment>
											<Spin size="large" />
										</Fragment>
									) : trips && trips.length > 0 ? (
										<Fragment>
											{trips.map((item, index) => {
												return <VehicleSearchItem key={index} trip={item} />;
											})}
										</Fragment>
									) : (
										<Fragment>
											<EmptyState />
										</Fragment>
									)}
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
