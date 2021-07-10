import { ReactComponent as Mail } from 'assets/svg/mail.svg';
import classnames from 'classnames/bind';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { View } from 'ui/atoms/components/Typography';
import FAQS from 'ui/widgets/Customer/components/Faqs';

import style from './index.module.scss';

let styles = classnames.bind(style);

const Support = () => (
	// let [activeTab, setActiveTab] = useState('seat');

	<Fragment>
		<View className={styles('support')}>
			<View className={styles('help--wrapper')}>
				<View className="tscol justify-start align-center center mb-sm">
					<h3 className="sub-lg black">Welcome to the Help Center</h3>
					<p className="p-lg black">
						View all of your bookings, make changes and get help if you need it.
					</p>
				</View>

				<View className={`${styles('help--item')} mb-md`}>
					<h3 className="sub-lg black pb-xs">Sign in to get help with your bookings</h3>
					<p className="p-lg black mb-md">
						View all of your bookings, make changes and get help if you need it.
					</p>
					<View className="d-flex">
						<Link to="/login" className="link link-brand-2 mr-sm">
							SIGN IN
						</Link>
						<Link to="/login" className="link link-white">
							Use Booking Details
						</Link>
					</View>
				</View>

				<View className={`${styles('help--item')} mb-md`}>
					<h3 className="sub-lg black  pb-xs">Sign in to get help with your bookings</h3>
					<p className="p-lg black mb-md">Frequently asked questions</p>
					<View className="d-flex">
						<Link to="/login" className="tsrow link link-white">
							<Mail className="pr-xs" /> Use Booking Details
						</Link>
					</View>
				</View>

				<View className={styles('help--faq')}>
					<h3 className="sub-lg black center">Frequently asked questions</h3>
					<p className="p-lg black mb-md center">
						View all of your bookings, make changes and get help if you need it.
					</p>
					<View className={styles('help--faq--container')}>
						<FAQS />
					</View>
				</View>
			</View>
		</View>
	</Fragment>
);

export default Support;
