/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const mapStateToProps = (state) => ({
	login: state.login
});

export function GuestCustomer(WrappedComponent) {
	const ACCESS_TOKEN = window.localStorage.getItem('zipuJWTToken');
	return class extends Component {
		render() {
			return !ACCESS_TOKEN ? (
				<WrappedComponent {...this.props} />
			) : (
				<Redirect to="/customer/booking-history" />
			);
		}
	};
}

export function PrivateCustomer(WrappedComponent) {
	const ACCESS_TOKEN = window.localStorage.getItem('zipuJWTToken');
	return class extends Component {
		render() {
			return ACCESS_TOKEN ? (
				<WrappedComponent {...this.props} />
			) : (
				<Redirect to="/customer/login" />
			);
		}
	};
}

const CustomerGuard = ({ component: Component, login: { token, isAuthenticated }, ...rest }) => {
	let isLoggedIn = false;
	if (token && isAuthenticated) {
		isLoggedIn = true;
	}

	return (
		<Route
			{...rest}
			render={(props) => {
				return isLoggedIn ? <Component {...props} /> : <Redirect to="/customer/login" />;
			}}
		/>
	);
};

export default connect(mapStateToProps, {})(CustomerGuard);
