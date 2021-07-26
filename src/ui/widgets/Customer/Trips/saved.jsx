// import TripSearchItem from 'components/TripSearchItem';
import classnames from 'classnames/bind';
import React from 'react';
import { View } from 'ui/atoms/components/Typography';

import TripCard from '../components/TripCard';
import style from './index.module.scss';
import { mockData_TripCard } from './MOCK_DATA';
let styles = classnames.bind(style);

const SavedTrips = () => {
	return (
		<View className={styles('stWrapper')}>
			<View className="tscol justify-start align-center center mb-sm">
				<h3 className="sub-lg black">Saved Trip</h3>
				<p className="p-lg black">
					View all of your bookings, make changes and get help if you need it.
				</p>
			</View>
			<View className={`tscol ${styles('stItems')}`}>
				{/* <TripSearchItem />
				<TripSearchItem /> */}
				<TripCard tripInfo={mockData_TripCard} />
			</View>
		</View>
	);
};

export default SavedTrips;
