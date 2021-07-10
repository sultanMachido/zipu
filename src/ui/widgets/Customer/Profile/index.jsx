// import { ReactComponent as Mail } from 'assets/svg/mail.svg';
import classnames from 'classnames/bind';
import { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { View } from 'ui/atoms/components/Typography';

import UserNav from './Pages/UserNav';
import UserNotifications from './Pages/UserNotifications';
import UserPayment from './Pages/UserPayment';
import UserProfile from './Pages/UserProfile';
import UserSecurity from './Pages/UserSecurity';
import style from './profile.module.scss';

let styles = classnames.bind(style);

const CustomerProfile = () => (
	// let [activeTab, setActiveTab] = useState('seat');

	<Fragment>
		<View className={styles('user--container')}>
			<View className={styles('user--nav')}>
				<UserNav />
			</View>
			<View className={styles('user--info')}>
				<Switch>
					<Redirect from="/customer" to="/customer/profile" exact />
					<Route exact path="/customer/profile" component={UserProfile} />
					<Route exact path="/customer/security" component={UserSecurity} />
					<Route exact path="/customer/payment" component={UserPayment} />
					<Route exact path="/customer/notifications" component={UserNotifications} />
				</Switch>
			</View>
		</View>
	</Fragment>
);

export default CustomerProfile;
