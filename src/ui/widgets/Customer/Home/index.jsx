/* eslint-disable no-unused-vars */
import classnames from 'classnames/bind';
import { View } from 'ui/atoms/components/Typography';

import style from './index.module.scss';

let styles = classnames.bind(style);
import { ReactComponent as Car } from 'assets/svg/caralt.svg';
import { ReactComponent as Bus } from 'assets/svg/carbus.svg';
import React, { Fragment, useState } from 'react';

import Advert from '../components/Advert';
import BookTrip from '../components/BookTrip';
import Destinations from '../components/Destinations';
import FaqContainer from '../components/FaqContainer';
import HowItWorks from '../components/HowItWorks';
import MobileCta from '../components/MobileCta';
import Newsletter from '../components/Newsletter';
import Partners from '../components/Partners';
import TripPackages from '../components/TripPackages';
import TripTab from './TripTab';
import VehicleTab from './VehicleTab';
const Home = () => {
	const [activeTab, setActiveTab] = useState('seat');

	return (
		<Fragment>
			<View className={styles('hero')}>
				<View className={styles('hero__header')}>
					<h2>
						Book a trip or rent a car <br></br>going to all parts of Nigeria{' '}
					</h2>
					<View display="flex" className={styles('herotab')}>
						<button
							onClick={() => setActiveTab('seat')}
							className={`${styles('btn')} ${styles('btn-white')} ${styles('black')} ${
								activeTab === 'seat' ? 'active' : ''
							} `}>
							<Bus className="pr-xs" />
							Seat Booking
						</button>
						<button
							onClick={() => setActiveTab('hire')}
							className={`${styles('btn')} ${styles('btn-white')} ${styles('black')} ${
								activeTab === 'hire' ? 'active' : ''
							} `}>
							<Car className="pr-xs" />
							Hire a Car
						</button>
					</View>
				</View>
				<View className={styles('hero--tab--content')}>
					{activeTab === 'seat' ? <VehicleTab /> : <TripTab />}
				</View>
				<View className={styles('herotab--content')}>
					<BookTrip />
					<HowItWorks />
					<TripPackages />
					<Advert />
					<MobileCta />
					<FaqContainer />
					<Partners />
				</View>
			</View>
			<Newsletter />
			<Destinations />
		</Fragment>
	);
};

export default Home;
