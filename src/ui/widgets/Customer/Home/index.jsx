/* eslint-disable no-unused-vars */
import classnames from 'classnames/bind';
import { View } from 'ui/atoms/components/Typography';

import style from './index.module.scss';

let styles = classnames.bind(style);
import { ReactComponent as Car } from 'assets/svg/caralt.svg';
import { ReactComponent as Bus } from 'assets/svg/carbus.svg';
import React, { Fragment } from 'react';

import Advert from '../components/Advert';
import BookTrip from '../components/BookTrip';
import Destinations from '../components/Destinations';
import FaqContainer from '../components/FaqContainer';
import HowItWorks from '../components/HowItWorks';
import MobileCta from '../components/MobileCta';
import Newsletter from '../components/Newsletter';
import Partners from '../components/Partners';
// import TripSearchTab from '../components/TripSearchTab';
import VehicleSearchTab from '../components/SearchTab/VehicleSearchtab';
import TripPackages from '../components/TripPackages';

const Home = () => (
	// let [activeTab, setActiveTab] = useState('seat');

	<Fragment>
		<View className={styles('hero')}>
			<View className={styles('hero__header')}>
				<h2>
					Book a trip or rent a car <br></br>going to all parts of Nigeria{' '}
				</h2>
				<View display="flex" className={styles('heroTab')}>
					<button className={`btn btn-white black`}>
						<Bus className="pr-xs" />
						Seat Booking
					</button>
					<button className={`btn  btn-white black`}>
						<Car className="pr-xs" />
						Hire a Car
					</button>
				</View>
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

export default Home;
