import { Slider, Spin } from 'antd';
import classnames from 'classnames/bind';
import { View } from 'ui/atoms/components/Typography';

import style from './index.module.scss';

let styles = classnames.bind(style);
import './index.scss';

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchGroupedTrips } from 'redux/actions/trips/trips.actions';

import TripFilter from './components/TripFilter';
import TripSearchItem from './components/TripSearchItem/index';
import VehicleSearchItem from './components/VehicleSearchItem';
import EmptyState from './empty';

const SearchVehicles = ({ trips: { trips, fetchAllTripsLoading }, ...props }) => {
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
					{/* <TripCard tripInfo={mockData_TripCard} /> */}
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
								<div className="d-flex searchItems__tabs mb-sm">
									<button>Small Cars</button>
									<button className="activeBtn">Medium Cars</button>
									<button>Large Cars</button>
									<button>Pemium Cars</button>
								</div>

								<div className="searchItems__results">
									{/* <TripSearchItem /> */}
									{fetchAllTripsLoading ? (
										<Fragment>
											<Spin size="large" />
										</Fragment>
									) : trips && trips.length > 0 ? (
										<Fragment>
											{trips.map((item, index) => {
												return <TripSearchItem key={index} trip={item} />;
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchVehicles));
