import Sample from 'pages/Sample';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Sample} />
				{/* <Route exact path="/help" component={Help} />
					<Route exact path="/search/trip" component={TripSearch} />
					<Route exact path="/search/vehicle" component={VehicleSearch} />
					<Route exact path="/trips/saved" component={SavedTrip} />
					<Route path="/user" component={UserPage} />
					<Route exact path="/login" component={Guest(Login)} />
					<Route exact path="/register" component={Guest(Registration)} />
					<Route path="/" component={Private(DashboardContainer)} /> */}
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
