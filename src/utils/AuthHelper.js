/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
	console.log('code go here', ACCESS_TOKEN);
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
