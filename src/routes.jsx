import ForgotPage from 'pages/Customer/Auth/forgot';
import LoginPage from 'pages/Customer/Auth/login';
import RegisterPage from 'pages/Customer/Auth/register';
import ResetPage from 'pages/Customer/Auth/reset';
import BookingHistoryPage from 'pages/Customer/Booking/BookingHistory';
import CompanyPage from 'pages/Customer/Company';
import HomePage from 'pages/Customer/Home/index';
import ProfilePage from 'pages/Customer/Profile';
import SearchTripsPage from 'pages/Customer/Search/trips';
import SearchVehiclesPage from 'pages/Customer/Search/vehicles';
import SupportPage from 'pages/Customer/Support/index';
import BookTripPage from 'pages/Customer/Trip/book';
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
				<Route exact path="/customer/trips/book" component={BookTripPage} />
				<Route exact path="/help-support" component={SupportPage} />
				<Route exact path="/company" component={CompanyPage} />
				<Route path="/customer" component={ProfilePage} />
				<Route exact path="/search/trips" component={SearchTripsPage} />
				<Route exact path="/search/vehicles" component={SearchVehiclesPage} />
				<Route exact path="/reg" component={TransportType} />
				<Route exact path="/vehicle" component={TransportType} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
