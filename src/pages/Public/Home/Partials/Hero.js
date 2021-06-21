import React, {Fragment, useState} from 'react';
import {DatePicker} from 'antd';
import moment from 'moment';

import VehicleTab from './VehicleTab';
import TripTab from './TripTab';

import {ReactComponent as Car} from 'assets/svg/caralt.svg';
import {ReactComponent as Bus} from 'assets/svg/carbus.svg';

// const {RangePicker} = DatePicker;

const dateFormat = 'YYYY/MM/DD';

const Hero = () => {
	const [activeTab, setActiveTab] = useState('seat');

	return (
		<Fragment>
			<section className="hero">
				<div className="hero__header">
					<h2>
						Book a trip or rent a car <br></br>going to all parts of Nigeria{' '}
					</h2>
					<div className="d-flex heroTab">
						<button
							onClick={() => setActiveTab('seat')}
							className={`btn btn-white black ${
								activeTab === 'seat' ? 'active' : ''
							} `}
						>
							<Bus className="pr-xs" />
							Seat Booking
						</button>
						<button
							onClick={() => setActiveTab('hire')}
							className={`btn  btn-white black ${
								activeTab === 'hire' ? 'active' : ''
							}`}
						>
							<Car className="pr-xs" />
							Hire a Car
						</button>
					</div>
				</div>
				<div className="heroTab__content">
					{activeTab === 'seat' ? <VehicleTab /> : <TripTab /> }
				</div>
			</section>
		</Fragment>
	);
};

export default Hero;
