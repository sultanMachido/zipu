/* eslint-disable react-hooks/exhaustive-deps */
// import TripSearchItem from 'components/TripSearchItem';
import { Spin } from 'antd';
import classnames from 'classnames/bind';
import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCustomerSavedTrips } from 'redux/actions/customer/customer.actions';
import { View } from 'ui/atoms/components/Typography';

import SavedTripItem from './components/SavedTripItem';
import style from './index.module.scss';
let styles = classnames.bind(style);

const SavedTrips = ({
	customer: { fetchCustomerSavedTripsSuccess, fetchCustomerSavedTripsLoading },
	...props
}) => {
	useEffect(() => {
		props.getCustomerSavedTrips();
	}, []);

	return (
		<View className={styles('stWrapper')}>
			<View className="tscol justify-start align-center center mb-sm">
				<h3 className="sub-lg black">Saved Trip</h3>
				<p className="p-lg black">
					View all of your bookings, make changes and get help if you need it.
				</p>
			</View>
			<View className={`tscol ${styles('stItems')}`}>
				{fetchCustomerSavedTripsLoading ? (
					<Fragment>
						<Spin size="large" />
					</Fragment>
				) : (
					<Fragment>
						{fetchCustomerSavedTripsSuccess.length > 0 ? (
							fetchCustomerSavedTripsSuccess.map((item, index) => {
								console.log('trup', item);
								return <SavedTripItem bordered={true} key={index} trip={item} />;
							})
						) : (
							<h2>No Saved Trips fo you yet</h2>
						)}
					</Fragment>
				)}
			</View>
		</View>
	);
};

const mapStateToProps = (state) => ({
	customer: state.customer
});

const mapDispatchToProps = {
	getCustomerSavedTrips
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SavedTrips));
