import { Layout } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, useParams } from 'react-router-dom';

import MenuTabs from '../components/MenuTabs';

import Navbar from '../components/Navbar/index';
import TitlePane from '../components/TitlePane';
import Bookings from '../pages/DashboardPages/Bookings';
import Staff from '../pages/DashboardPages/Staff';
import StaffAdd from '../pages/DashboardPages/Staff/StaffAdd';
import CarListing from '../pages/DashboardPages/CarListing';
import AddVehicle from '../pages/DashboardPages/CarListing/AddVehicle';
import EditTrip from '../pages/DashboardPages/CarListing/EditVehicle';
import Footer from '../components/Footer';
import TripManagement from '../pages/DashboardPages/TripManagement';
import AddTrip from '../pages/DashboardPages/TripManagement/AddTrip';
import EditStaff from '../pages/DashboardPages/Staff/StaffEdit';
import Terminals from '../pages/DashboardPages/Terminals'

import { logUserOut } from '../redux/actions/login/login.actions';

import "./styles.scss";
import Report from "../pages/DashboardPages/Report";
import PromoCodes from "../pages/DashboardPages/Report/PromoCodes";
import Company from "../pages/DashboardPages/Company";

class DashboardContainer extends Component {
	handleLogout = async () => {
		return await this.props.logUserOut(this.props.history);
	};

	render() {
		const pathname = this.props.location.pathname;
		const profile = JSON.parse(window.localStorage.getItem('_profile'));
		const id = pathname.split('/')[3];

		const innerPages = [
			{
				route: '/staff/add',
				prev: '/staff',
				title: 'Create new staff'
			},
			{
				route: `/staff/edit/${id}`,
				prev: '/staff',
				title: 'Edit Staff'
			},
			{
				route: '/car-listing/edit/:id',
				prev: '/car-listing',
				title: 'Edit Listing'
			},
			{
				route: '/car-listing/add',
				prev: '/car-listing',
				title: 'Create new trip'
			},
			{
				route: '/reports/promo-codes',
				prev: '/reports',
				title: 'Promo Codes'
			},
			{
				route: '/trip-management/add',
				prev: '/trip-management',
				title: 'Create new Trip'
			}
		];

		const selectedInnerPage = innerPages.filter(({ route }) => {
			return route === pathname;
		})[0];
		return (
			<>
				<Navbar path={pathname} profile={profile} logoutUser={this.handleLogout} />
				<div style={{ marginTop: "80px" }} />
				<MenuTabs
					visible={selectedInnerPage ? false : true}
				/>
				<TitlePane
					prev={selectedInnerPage && selectedInnerPage.prev}
					title={selectedInnerPage && selectedInnerPage.title}
					visible={selectedInnerPage ? true : false}
				/>
				<Layout className="layoutContainer">
					<Switch>
						<Route exact path="/bookings" component={Bookings}></Route>
						<Route exact path="/staff" component={Staff}></Route>
						<Route exact path="/staff/add" component={StaffAdd}></Route>
						<Route exact path="/staff/edit/:id" component={EditStaff}></Route>
						<Route exact path="/car-listing" component={CarListing}></Route>
						<Route exact path="/car-listing/add" component={AddVehicle}></Route>
						<Route exact path="/car-listing/edit/:id" component={EditTrip}></Route>
						<Route exact path="/trip-management" component={TripManagement}></Route>
						<Route exact path="/trip-management/add" component={AddTrip}></Route>
						<Route exact path="/terminals" component={Terminals}></Route>
					</Switch>
				</Layout>
				<div className="footerSection">
					<Footer />
				</div>
			</>
		);
	}
}

const mapDispatchToProps = {
	logUserOut
};
export default withRouter(connect(state => ({}), mapDispatchToProps)(DashboardContainer));
