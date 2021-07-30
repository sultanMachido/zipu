import './styles.scss';

import React from 'react';
import { MailBox } from 'ui/svgs/MailBox';

const Newsletter = () => {
	return (
		<div className="tscol justify-center newsletterWrapper">
			<MailBox className="mb-xs" />
			<h2 className="title-lg black">
				Subscribe to see Zipu <br></br> Secret Deals
			</h2>
			<h2 className="title-sm mt-xs mb-sm black">
				Join our list of subscribers, put in your email address below
			</h2>
			<div className="tsrow">
				<input className="input mr-sm" type="email" placeholder="Your Email Address" />
				<button className="btn btn-brand-2">SUBSCRIBE</button>
			</div>
		</div>
	);
};

export default Newsletter;
