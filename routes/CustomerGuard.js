import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const CustomerGuard = ({ component: Component, login: { token, isAuthenticated }, ...rest }) => {
	let isLoggedIn = false;
	console.log('ffff');
	if (token && isAuthenticated) {
		isLoggedIn = true;
	}

	return (
		<Route
			{...rest}
			render={(props) => {
				return isLoggedIn ? <Component {...props} /> : <Redirect to="customer/login" />;
			}}
		/>
	);
};

const mapStateToProps = (state) => ({
	login: state.login
});

export default connect(mapStateToProps, {})(CustomerGuard);
