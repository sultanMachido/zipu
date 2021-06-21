import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/VendorApp/Auth/Login';
import Registration from './pages/VendorApp/Auth';

import HomePage from 'pages/Public/Home';
import Help from 'pages/Public/Help';
import SavedTrip from 'pages/Public/Trip/SavedTrip';
import UserPage from 'pages/Public/User';
import TripSearch from 'pages/Public/Home/TripSearch';
import VehicleSearch from 'pages/Public/Home/VehicleSearch';

import {Guest, Private} from './utils/AuthHelper';
import DashboardContainer from './layouts/DashboardContainer';
import 'antd/dist/antd.css';

export default class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					
					<Route exact path="/home" component={HomePage} />
					<Route exact path="/help" component={Help} />
					<Route exact path="/search/trip" component={TripSearch} />
					<Route exact path="/search/vehicle" component={VehicleSearch} />
					<Route exact path="/trips/saved" component={SavedTrip} />
					<Route path="/user" component={UserPage} />

					<Route exact path="/login" component={Guest(Login)} />
					<Route exact path="/register" component={Guest(Registration)} />
					<Route path="/" component={Private(DashboardContainer)} />
				</Switch>
			</BrowserRouter>
		);
	}
}
