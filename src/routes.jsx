import HomePage from 'pages/Customer/Home/index';
import SupportPage from 'pages/Customer/Support/index';
import Sample from 'pages/Sample';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TransportType from 'ui/widgets/Auth/Vendor/TransportType';

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Sample} />
				<Route exact path="/reg" component={TransportType} />
				<Route exact path="/home" component={HomePage} />
				<Route exact path="/support" component={SupportPage} />
				<Route exact path="/profile" component={TransportType} />
				<Route exact path="/search" component={TransportType} />
				<Route exact path="/trips" component={TransportType} />
				<Route exact path="/vehicle" component={TransportType} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
