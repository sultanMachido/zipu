import ForgotPage from 'pages/Customer/Auth/forgot';
import LoginPage from 'pages/Customer/Auth/login';
import RegisterPage from 'pages/Customer/Auth/register';
import ResetPage from 'pages/Customer/Auth/reset';
import BookingHistoryPage from 'pages/Customer/Booking/BookingHistory';
import HomePage from 'pages/Customer/Home/index';
import ProfilePage from 'pages/Customer/Profile';
import SupportPage from 'pages/Customer/Support/index';
import SavedTripsPage from 'pages/Customer/Trip/index';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TransportType from 'ui/widgets/Auth/Vendor/TransportType';

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/customer/login" component={LoginPage} />
				<Route exact path="/customer/register" component={RegisterPage} />
				<Route exact path="/customer/forgot-password" component={ForgotPage} />
				<Route exact path="/customer/reset-password" component={ResetPage} />
				<Route exact path="/customer/booking-history" component={BookingHistoryPage} />
				<Route exact path="/customer/trips/saved" component={SavedTripsPage} />
				<Route exact path="/help-support" component={SupportPage} />
				<Route path="/customer" component={ProfilePage} />
				<Route exact path="/trips" component={TransportType} />
				<Route exact path="/reg" component={TransportType} />
				<Route exact path="/vehicle" component={TransportType} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
