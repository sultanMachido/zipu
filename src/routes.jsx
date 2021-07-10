import ForgotPage from 'pages/Customer/Auth/forgot';
import LoginPage from 'pages/Customer/Auth/login';
import RegisterPage from 'pages/Customer/Auth/register';
import ResetPage from 'pages/Customer/Auth/reset';
import HomePage from 'pages/Customer/Home/index';
import SupportPage from 'pages/Customer/Support/index';
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
				<Route exact path="/support" component={SupportPage} />
				<Route exact path="/profile" component={TransportType} />

				<Route exact path="/reg" component={TransportType} />
				<Route exact path="/search" component={TransportType} />
				<Route exact path="/trips" component={TransportType} />
				<Route exact path="/vehicle" component={TransportType} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
