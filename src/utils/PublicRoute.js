/* eslint-disable react/display-name */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const mapStateToProps = (state) => ({
	login: state.login
});

const PublicRoute = ({ component: Component, login: { token, isAuthenticated }, ...rest }) => {
	let isLoggedIn = false;
	if (token && isAuthenticated) {
		isLoggedIn = true;
	}

	return (
		<Route
			{...rest}
			render={(props) =>
				isLoggedIn ? <Redirect to="/customer/booking-history" /> : <Component {...props} />
			}
		/>
	);
};

export default connect(mapStateToProps, {})(PublicRoute);
