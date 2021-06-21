import React, {Fragment} from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import PublicContainer from 'layouts/PublicContainer';
import UserProfile from './Partials/UserProfile';
import UserNotifications from './Partials/UserNotifications';
import UserSecurity from './Partials/UserSecurity';
import UserPayment from './Partials/UserPayment';
import UserNav from './Partials/UserNav';
import './index.scss';

const UserPage = () => {
	return (
		<PublicContainer>
			<Fragment>
				<section className="userContainer">
					<div className="userNav">
						<UserNav />
					</div>
					<div className="userInfo">
						<Switch>
							<Redirect from="/user" to="/user/profile" exact />
							<Route exact path="/user/profile" component={UserProfile} />
							<Route exact path="/user/security" component={UserSecurity} />
							<Route exact path="/user/payment" component={UserPayment} />
							<Route exact path="/user/notifications" component={UserNotifications} />
						</Switch>
					</div>
				</section>
			</Fragment>
		</PublicContainer>
	);
};

export default UserPage;
