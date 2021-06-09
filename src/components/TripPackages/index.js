import React from 'react';
import './styles.scss';
import LeftDirectionIcon from '../../assets/img/tripArrowLeft.png';
import RightDirectionIcon from '../../assets/img/tripArrowRight.png';
import TripPackageCard from '../TripPackageCard';
import {TripPackageCards} from './styles.js';

import TripPackageCarOne from '../../assets/img/tripPackageCarOne.png';
import TripPackageCarTwo from '../../assets/img/tripPackageCarTwo.png';
import seatBooking from '../../assets/img/seatBooking.png';

const tripPackage = [
	{
		id: 1,
		transco: 'GIG Transport',
		source: 'Kaduna',
		destination: 'Lagos',
		description: 'A valet is usually an employee of the establishment or an employee ',
		vehicleType: '24 Seater',
		cardImage: TripPackageCarOne,
		vehicleIcon: seatBooking
	},
	{
		id: 2,
		transco: 'ABC Transport',
		source: 'Kogi',
		destination: 'Sokoto',
		description: 'A valet is usually an employee of the establishment or an employee ',
		vehicleType: '14 Seater',
		cardImage: TripPackageCarTwo,
		vehicleIcon: seatBooking
	},
	{
		id: 3,
		transco: 'Peace Transport',
		source: 'Abuja',
		destination: 'Kwara',
		description: 'A valet is usually an employee of the establishment or an employee ',
		vehicleType: '24 Seater',
		cardImage: TripPackageCarOne,
		vehicleIcon: seatBooking
	},
	{
		id: 4,
		transco: 'Anambra Transport',
		source: 'Imo',
		destination: 'Enugu',
		description: 'A valet is usually an employee of the establishment or an employee ',
		vehicleType: '24 Seater',
		cardImage: TripPackageCarTwo,
		vehicleIcon: seatBooking
	}
];

const TripPackages = () => {
	const [position, setPosition] = React.useState(10);

	const onScrollLeft = scrollOffset => {
		if (position > -10) {
			setPosition(data => data + scrollOffset);
		}
	};

	const onScrollRight = scrollOffset => {
		if (position < 50) {
			setPosition(data => data + scrollOffset);
		}
	};

	return (
		<div className="tripPackagesWrapper">
			<div className="tripPackageLeft">
				<h1 className="h3-lg black">Top trip packages</h1>
				<p>
					A valet is usually an employee of the establishment or an employee of a third
					party
				</p>
				<div className="directionArrowsWrapper">
					<img
						src={LeftDirectionIcon}
						alt="LeftDirectionIcon"
						onClick={() => onScrollRight(40)}
					/>
					<img
						src={RightDirectionIcon}
						alt="RightDirectionIcon"
						onClick={() => onScrollLeft(-40)}
					/>
				</div>
			</div>
			<div className="tripPackageRight">
				<div className="scrollWrapper">
					<TripPackageCards position={position}>
						{tripPackage.map(tripPackage => {
							return (
								<React.Fragment key={tripPackage.id}>
									<TripPackageCard
										tripPackage={tripPackage}
										position={position}
									/>
								</React.Fragment>
							);
						})}
					</TripPackageCards>
				</div>
			</div>
		</div>
	);
};

export default TripPackages;
