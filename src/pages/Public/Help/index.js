import React from 'react';

import PublicContainer from 'layouts/PublicContainer';
import FaqItems from 'components/FaqItems';

import {Link} from 'react-router-dom';
import {ReactComponent as Mail} from 'assets/svg/mail.svg';

import './index.scss';

const HelpPage = () => {
	return (
		<PublicContainer>
			<section className="helpWrapper">
				<div className="tscol justify-start align-center center mb-sm">
					<h3 className="sub-lg black">Welcome to the Help Center</h3>
					<p className="p-lg black">
						View all of your bookings, make changes and get help if you need it.
					</p>
				</div>

				<div className="help__item mb-md">
					<h3 className="sub-lg black pb-xs">Sign in to get help with your bookings</h3>
					<p className="p-lg black mb-md">
						View all of your bookings, make changes and get help if you need it.
					</p>
					<div className="d-flex">
						<Link to="/login" className="btn btn-brand-2 mr-sm">
							SIGN IN
						</Link>
						<Link to="/login" className="btn btn-white">
							Use Booking Details
						</Link>
					</div>
				</div>

				<div className="help__item mb-md">
					<h3 className="sub-lg black  pb-xs">Sign in to get help with your bookings</h3>
					<p className="p-lg black mb-md">Frequently asked questions</p>
					<div className="d-flex">
						<Link to="/login" className="tsrow btn btn-white">
							<Mail className="pr-xs" /> Use Booking Details
						</Link>
					</div>
				</div>

				<div className="help__faq">
					<h3 className="sub-lg black center">Frequently asked questions</h3>
					<p className="p-lg black mb-md center">
						View all of your bookings, make changes and get help if you need it.
					</p>
					<FaqItems />
				</div>
			</section>
		</PublicContainer>
	);
};

export default HelpPage;
