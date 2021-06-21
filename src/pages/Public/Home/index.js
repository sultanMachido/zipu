import React from 'react';

import PublicContainer from 'layouts/PublicContainer';
import Hero from './Partials/Hero.js';
import BookTrip from 'components/BookTrip';
import HowItWorks from 'components/HowItWorks';
import Advert from 'components/Advert';
import MobileCta from 'components/MobileCta';
import TripPackages from 'components/TripPackages';
import Partners from 'components/Partners';
import Destinations from 'components/Destinations';
import Newsletter from 'components/Newsletter';
import FAQS from 'components/FAQS';

import './index.scss';

const HomePage = () => {
	return (
		<PublicContainer>
			<section>
				<Hero />
				<section className="heroContent">
					<BookTrip />
					<HowItWorks />
					<TripPackages />
					<Advert />
					<MobileCta />
					<FAQS />
					<Partners />
				</section>
				<Newsletter />
				<Destinations />
			</section>
		</PublicContainer>
	);
};

export default HomePage;
