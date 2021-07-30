import { Slider } from 'antd';
import classnames from 'classnames/bind';
import { View } from 'ui/atoms/components/Typography';

import style from './index.module.scss';

let styles = classnames.bind(style);
import './index.scss';

import React, { Fragment } from 'react';

// import TripSearchTab from '../components/TripSearchTab';
// import VehicleSearchTab from '../components/VehicleSearchtab';
import TripCard from '../components/TripCard';
import TripFilter from './components/TripFilter';
import { mockData_TripCard } from './MOCK_DATA';

const SearchTrips = () => {
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
									<TripCard tripInfo={mockData_TripCard} />
								</div>
							</div>
						</div>
					</section>
				</View>
			</View>
		</Fragment>
	);
};

export default SearchTrips;
